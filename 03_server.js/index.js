// const htmlpage = require('./index.html')
const http = require('http')
http.createServer((req,resp)=>{
    resp.write("<h1>Hello world, this is yusuf<br>html not works with node js </h1>")
    resp.end();
}).listen(3000)