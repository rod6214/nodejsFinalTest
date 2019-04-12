var promise1 = getPromise1();
var promise2 = getPromise2();

function all(p1, p2){
    var counter = 0;
    var list = [];
    return new Promise((fulFill, reject)=>{
        
        p1.then((x) => {
            list.push(x);
            if(counter > 0){
                fulFill(list);
            }
            counter++
        });
        p2.then((y) => {
            list.push(y);
            if(counter > 0){
                fulFill(list);
            } 
            counter++
        });
        
    });
}

all(promise1, promise2).then(console.log);