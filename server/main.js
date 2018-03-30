var fs = require('fs')

var emlformat = require('./eml');

var eml = fs.readFileSync("./eml.eml", "utf-8");

console.log('ddd', emlformat.read(eml, function(err, data){
  var dd = data.attachments[0].data;
  // console.log('data', dd.toString("utf-8"))
  fs.writeFile('./test.ppt', dd);
  // Buffer.from(data.attachments[0].data).toString("utf-6")
}))
