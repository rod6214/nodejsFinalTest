
var pExt = require('./promiseExtensions');

var validators = new pExt.Validators();



var promise = new Promise(function (fulfill, reject) {

    validators.PromiseValidator((isValid)=>{
        if(isValid){
            fulfill('I FIRED');
            reject(new Error('I DID NOT FIRE'));
        }
        else{
            reject(new Error('I DID NOT FIRE'));
        }
    });

  }).then(onFulFill, onReject);

  function onFulFill(message){
    console.log(message);
  }

  function onReject (error) {
    console.log(error.message);
  }