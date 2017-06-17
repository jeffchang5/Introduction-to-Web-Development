const postRoute = require('./api/posts');
const userRoute = require('./api/users');
const express = require('express');

require('./db/init')();

const server = express();
// Middleware
server.use(require('body-parser').json());

server.use('/api/posts', postRoute);
server.use('/api/users', userRoute);
server.listen(8000);

console.log("Listening on port " + 8000);