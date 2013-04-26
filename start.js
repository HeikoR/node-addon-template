// minimal start script
var queue = require('./');

console.log('* starting queue ...');
var result = queue.run();
console.log('* status: "%s"',result);

