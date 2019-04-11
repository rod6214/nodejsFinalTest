


Promise.resolve('SECRET VALUE').then(onFulFill).catch(onCatch);
Promise.reject(new Error('THERE IS AN ERROR!!!')).then(null, onReject);




function onFulFill(message){
    console.log(message);
    throw new Error('Ups!!!');
}

function onReject(error){
    console.log(error.message);
}

function onCatch(error){
    console.log(error.message);
}