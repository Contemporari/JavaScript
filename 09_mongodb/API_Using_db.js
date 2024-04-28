const express = require('express');
const mongodb = require("mongodb")
const db = require('./mongodb');
const app = express();

app.use(express.json())// this is used for getting data in json from user sent by postman

let main =async ()=>{
    
    return (data.find({}).toArray())
}
app.get('/',async(req, resp)=>{
    let data = await db()
    let result = await data.find({}).toArray()
    resp.send(result)
})

app.post('/',async(req,resp)=>{
    const data = await db()
    const result = await data.insertMany(req.body)
    resp.send(result)
})

app.put('/:name',async(req,resp)=>{
    const data = await db()
    const result = await data.updateMany(
        {name:req.params.name},
        {$set:req.body})
    resp.send(result)
})


app.delete('/:id',async(req,resp)=>{
    const data = await db()
    const result = await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
    resp.send(result)
})

app.listen(4000)
// same route can use for both get and put 
