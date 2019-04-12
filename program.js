
var http = require('./node_modules/q-io/http');

var proReader = http.read('http://localhost:1337');

proReader.then((json)=>{
    console.log(JSON.parse(json));
});


