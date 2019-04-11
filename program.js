var bl = require('bl');
var http = require('http');

// http.get(process.argv[2], function(res) {
//   res.setEncoding('utf8');
//   res.pipe(bl(function (err, data) {
//       console.log(data.length);
//       console.log(data.toString());
//   }))
// });


var urls = [process.argv[2], process.argv[3], process.argv[4]];
var list = [];

for(var i = 0; i < urls.length; i++){
    http.get(urls[i], function(res) {
        res.setEncoding('utf8');
        let host = this.agent.protocol + '//' + this._header.match(/localhost\:(.*)/g);
        
        res.pipe(bl(function (err, data) {
            list.push({
                host:host,
                data:data.toString()
            });

            
            if(list.length == 3){
                for(let url of urls){
                    let res = list.find((x)=>{ return x.host == url });
                    console.log(res.data);
                }
            }
        }))
    });
}