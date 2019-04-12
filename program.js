// 'use strict';
function parsePromised(json){
    
    return new Promise((fulFill, reject)=>{
        
        try{
            fulFill(JSON.parse(json));
        }catch(err){
            reject(err);
        }
    });
}

function onReject(error){
    console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject);
