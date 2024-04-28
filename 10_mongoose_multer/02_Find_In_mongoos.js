const express = require('express')
const student = require('./student_model')

const app = express()
app.use(express.json())

app.get('/list',async (req,resp)=>{
    let data =await student.find(req.body)
    console.log("done");
    resp.send(data)
})
app.delete('/delete/:_id',async(req,resp)=>{
    let data = await student.deleteOne(req.params)
    
    resp.send(data)
})
app.put('/update/:_id',async(req,resp)=>{
    let data = await student.updateOne(req.params,{
        $set:req.body
    })
    resp.send(data)
})
// app.put('/update',async(req,resp)=>{
//     let data = await student.updateOne({name:req.body.name},{$set:req.body})
//     resp.send(req.body)
// })
app.listen(4000)
console.log("port is :4000");





