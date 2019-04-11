

var firstP = first();

var secondP= firstP.then((val)=>{
    return second(val);
});

secondP.then(console.log);

