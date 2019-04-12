function alwaysThrows(){
    throw new Error('OH NOES');
}

function iterate(arg){
    console.log(arg);
    return arg + 1;
}

var myPromise = Promise.resolve(1);

function onReject(error){
    console.log(error.message);
}

myPromise
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate).catch(onReject);

