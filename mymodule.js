var fs = require('fs');

module.exports = function Directory(dirName, ext, callback){
    fs.readdir(dirName, (err, list)=>{
        if (err) return callback(err);
        let mdFiles = list.filter((x)=> { return x.search(ext) > 0 });
        callback(null, mdFiles);
        /* let mdFiles = list.filter((x)=> { return x.search('.md') >= 0 });

        for(var mdFile of mdFiles){
            console.log(mdFile);
        } */
    });
}