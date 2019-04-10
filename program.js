var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
      console.log(data.length);
      console.log(data.toString());
  }))
  /* res.on('data', function(data){
      console.log(data);
  }); */
});