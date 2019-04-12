
var http = require('./node_modules/q-io/http');

var proSession = http.read('http://localhost:7000');


var user = function(srv){
    return new Promise((fulFill, reject)=>{
        srv.then((id) => {
            let proDb = http.read('http://localhost:7001/' + id);
            proDb.then((user)=>{
                fulFill(JSON.parse(user));
            });
        });
    });
}

user(proSession).then(onFulFill);

function onFulFill(data){
    console.log(data);
}






