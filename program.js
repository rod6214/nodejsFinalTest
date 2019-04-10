var fs = require('fs');

//we have filter .md files

fs.readdir(process.argv[2], (err, list)=>{
    if (err) throw err;

    let mdFiles = list.filter((x)=> { return x.search('.md') >= 0 });

    for(var mdFile of mdFiles){
        console.log(mdFile);
    }
});