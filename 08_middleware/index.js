const express = require('express')

const app = express()

//creating middleware
const ageFilterMiddlleware = (req,resp,next)=>{

    resp.send("you got it.")
    next()

    // if(!req.query.age){
    //     resp.send("Please provide yout age.")
    // }
    // else if(req.query.age > 18){
    //     next()
    // }
    // else{
    //     resp.send("You are not authorized to enter.")
    // }
}

app.use(ageFilterMiddlleware)

app.get('/',(req,resp)=>{
    resp.send("<h2>Welcome To The Home Page</h2>")
})
app.get('/about',(req,resp)=>{
    resp.send("<h2>Welcome To The About Page</h2>")
})
app.listen(4000)

