var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);

console.log('SETTINGS');
console.log('');
console.log('Started Node server, listening on port: 8080');
console.log('---------------------------------------------------------------');
console.log('');