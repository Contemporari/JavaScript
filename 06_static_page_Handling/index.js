// const express = require('express')
// const app = express()

// ######################## BASIC ROUTE FOR ####################
// app.get('',(req,resp)=>{
//     resp.send('<h1>Hello, You got the home page</h1><h4><br>To navigate you get change url to<br>1. /about<br>    2. /help</h4>')
// })
// app.get('/about',(req,rsp)=>{
//     console.log('Data send by user is => ',req.query)
//     rsp.send(`<h1>Hello, This is about page<br>${req.query.name}</h1>`)
// })
// app.get('/help',(req,rsp)=>{
//     rsp.send('<h1>Hello, This is help page</h1>')
// })
// app.listen(4000)




// ######################### THIS IS ABOUT TO IMPORT HTML FILE AND VIEW IT #########

const path = require ('path')
const express = require('express')
const app = express()
const dirpath = path.join(__dirname,'Views') 


// {app.use(express.static(dirpath))// this block is for static file serving 
app.listen(4000)

app.get('',(req,resp)=>{
    resp.sendFile(`${dirpath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${dirpath}/about.html`)
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${dirpath}/help.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${dirpath}/notfound.html`)
})




