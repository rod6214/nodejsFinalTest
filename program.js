
var pExt = require('./promiseExtensions');

var validators = new pExt.Validators();



var promise = new Promise(function (fulfill, reject) {

    fulfill('PROMISE VALUE');

}).then(onFulFill, onReject);

function onFulFill(message){
    console.log(message);
}

function onReject (error) {
    console.log(error.message);
}

console.log('MAIN PROGRAM');
