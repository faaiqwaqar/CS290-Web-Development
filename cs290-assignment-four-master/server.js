/*
 * Write your server code in this file.
 *
 * name: Faaiq Waqar
 * email: waqarf@oregonstate.edu
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

var cssMap = new Map();
var htmlMap = new Map();
var jsMap = new Map();
var errMap = new Map();

var cssSwitch = 0;
var htmlSwitch = 0;
var jsSwitch = 0;
var errSwitch = 0;

const server = http.createServer((req,res) => {
  if(req.url === '/' || req.url === ''){
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
          if (err) throw err;
          if (htmlSwitch === 0){
            htmlMap.set(path,content);
            console.log('Mapping...Adding to Cache');
            htmlSwitch = htmlSwitch + 1;
          }
          console.log('Data is in the Map!');
          res.writeHead(200);
          res.write(htmlMap.get(path));
          // res.writeHead(200, {'Content-Type': 'text/html'});
          res.end();
      }
    );
  }
  else if(req.url === '/index.html'){
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
          if (err) throw err;
          if (htmlSwitch === 0){
            htmlMap.set(path,content);
            console.log('Mapping...Adding to Cache');
            htmlSwitch = htmlSwitch + 1;
          }
          console.log('Data is in the Map!');
          res.writeHead(200);
          res.write(htmlMap.get(path));
          // res.writeHead(200, {'Content-Type': 'text/html'});
          res.end();
      }
    );
  }
  else if(req.url === '/index.js'){
    fs.readFile(
      path.join(__dirname, 'public', 'index.js'),
      (err, content) => {
          if (err) throw err;
          if (jsSwitch === 0){
            jsMap.set(path,content);
            console.log('Mapping...Adding to Cache');
            jsSwitch = jsSwitch + 1;
          }
          console.log('Data is in the Map!');
          res.writeHead(200);
          res.write(jsMap.get(path));
          // res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.end();
      }
    );
  }
  else if(req.url === '/style.css'){
    fs.readFile(
      path.join(__dirname, 'public', 'style.css'),
      (err, content) => {
          if (err) throw err;
          if (cssSwitch === 0){
            cssMap.set(path,content);
            console.log('Mapping...Adding to Cache');
            cssSwitch = cssSwitch + 1;
          }
          console.log('Data is in the Map!');
          res.writeHead(200);
          res.write(cssMap.get(path));
          // res.writeHead(200, {'Content-Type': 'text/css'});
          res.end();
      }
    );
  }
  else{
    fs.readFile(
      path.join(__dirname, 'public', '404.html'),
      (err, content) => {
          if (err) throw err;
          if (errSwitch === 0){
            errMap.set(path,content);
            console.log('Mapping...Adding to Cache');
            errSwitch = errSwitch + 1;
          }
          console.log('Data is in the Map!');
          res.writeHead(200);
          res.write(errMap.get(path));
          // res.writeHead(404, {'Content-Type': 'text/html'});
          res.end();
      }
    );
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
