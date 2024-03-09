// var http=require('http');
// var fs=require('fs');
// var url=require('url');
// var product= require('./product');

// const { create } = require('domain');

// http.createServer((req,res)=>{
//  let x=url.parse(req.url,true);
//  let fileName= "";
//  switch (x.pathname) {
//     case '/':
//         case'/home':
//         fileName='home.html';
//         break;
//         case'/login':
//         fileName='login.html';
//         break;
//         case'/register':
//         fileName='register.html';
//         break;
//  }
//  fs.readFile(fileName, err, data) => {
//     if (err){
//         res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8'});
//         res.write('trang web khoong ton tai');
//         return res.end();    
//           }
//  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'});
//  res.write(data);
//  return res.end();    
 
// });
// }).listen(8080);
var http = require('http');
var fs = require('fs');
var url = require('url');
var product = require('./product');

http.createServer((req, res) => {
    let x = url.parse(req.url, true);
    let fileName = "";
    switch (x.pathname) {
        case '/':
        case '/home':
            fileName = 'home.html';
            break;
        case '/login':
            fileName = 'login.html';
            break;
        case '/register':
            fileName = 'register.html';
            break;
    }
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
            res.write('Trang web không tồn tại');
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
