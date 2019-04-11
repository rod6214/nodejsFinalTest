

var promise = new Promise((fulfill, reject)=>{
    fulfill('MANHATTAN');
}).then(promiseChainOff).then(console.log);



function promiseChainOff(title){
    return Promise.resolve(title).then(attachTitle);
}

secondP.then(console.log);

function attachTitle(title){
    return 'DR. ' + title;
}
