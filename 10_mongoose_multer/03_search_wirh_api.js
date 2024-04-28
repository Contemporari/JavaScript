const student = require('./student_model')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/search/:key',async(req,resq)=>{
    const data = await student.find({
        "$or":[
            {name:{$regex:req.params.key}}
        ]
    })
    resq.send(data)
})

app.listen(4000)
console.log("Listling on port : 4000");