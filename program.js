
function parsePromised(json){
    
    return new Promise((fulFill, reject)=>{
        
        try{
            json = JSON.parse(process.argv[2]);
            fulFill(json);
        }catch(err){
            reject(error);
        }
    });
}

function onReject(error){
    console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject);
