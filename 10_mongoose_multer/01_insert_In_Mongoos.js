const student = require('./student_model')
const express = require('express')

const app = express()
app.use(express.json()) //this to convet the data which is received from postman

app.post('/home',async(req,resp)=>{
    try{
        const data = new student(req.body)
        let result = await data.save()
        console.log(result);
        resp.send(result)
    }
    catch(err){
        resp.send(err,"kya kar rha hai bhai tu!!!!")
        console.log(err,"kya kar rha hai bhai tu!!!!")
    }
})

app.listen(5000);