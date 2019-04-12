
http = require("https");
//if json parsed is undefined is consider as a error
module.exports = {

    getGitJSON: function(user){
        
        return new Promise((resolve, reject) => {
    
            var content = "";  
            
            var options = {
                host: 'api.github.com',
                url: `https://api.github.com/${user}/repos`,
                path: '/users/rod6214/repos',
                headers: {
                  'User-Agent': 'node'
                }
              };
    
            var req = http.request(options, function(res) {
                res.setEncoding("utf8");
                res.on("data", function (chunk) {
                    content += chunk;
                });
    //if message == undefined OK
    //if message != undefined && message != 'not found' OK
                res.on("end", function () {
                    var json = JSON.parse(content);
                    if(json !== undefined){
                        var error = null;
                        //validating json
                        if(json.message != undefined || json.message != null){
                            if(json.message.toLowerCase() === 'not found'){
                                error = new Error('Service ' + json.message);
                            }
                        }
                        
                        if(error){
                            reject('I cannot connect to the server');
                        }
                        else{
                            resolve(json);
                        }

                    }
                    else{
                        reject(new Error('I cannot connect to the server'));
                    }
                });
            });

            req.on('error', () => {
                reject(new Error('I cannot connect to the server'));
            });
    
            req.end();
        });
    }
};