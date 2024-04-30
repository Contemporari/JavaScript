const { log } = require('console')
const eventEmitter = require('events')
const express = require('express')

const app = express()
let event = new eventEmitter()

let count =0 

event.on("event litner",()=>{
    count++
    console.log("event emmited ",count);
})

app.get('/',(req,resp)=>{
    resp.send("Request completed to root!")
    event.emit("event litner")
})
app.get('/home',(req,resp)=>{
    resp.send("Request completed to home!")
    event.emit("event litner")
})
app.get('/about',(req,resp)=>{
    resp.send("Request completed to about !")
    event.emit("event litner")  
})
app.listen(4000)