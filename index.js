// const http = require('http');
//
// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   res.end('hello world\n')
// }).listen(3000, '127.0.0.1');
//
// console.log('Server running at local host 3000');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // for posted form
  extended: true
}));

require('./cats.js')(app);

const server = app.listen(3000, ()=>{
  console.log('server at localhost 3000');
});