var utils = require('./utils');


/*
params:
    user: set github user
*/ 

utils.getGitJSON('rod6214').then((json) => {
    
    if(json.length <= 0){
        console.log('No repositories');
    }
    else if(json.length < 4){
        console.log('There are three repositories');
    }
    else{
        console.log('There are a lot of repositories');
    }

}, onReject);

function onReject(err){
    console.log(err.message);
}

