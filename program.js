

var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(()=> {fulfill()}, 300);

  }).then(()=>console.log('FULFILLED!'));