
var fs = require('fs');

Validators = module.exports.Validators = function(){}

Validators.prototype.PromiseValidator = function(callback){
    let filename = 'valid_cache';
    fs.exists(filename, function (exists) {
        callback(!exists);
        if(!exists){
            fs.appendFile(filename, 'pushed', function (err) {
                if (err) throw err;
            });
        }
    });
}