const myServer = require('./Myserver');
const myRouter = require('./MyRouter');
const myHandler = require('./MyHandler');

let handle = {};
handle['/'] = myHandler.start;
handle['/hello'] = myHandler.hello;
index['/wait'] = myHandler.wait;

myServer.start(myRouter.route, handle);