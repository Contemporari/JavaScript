const mongoose = require('mongoose');


 mongoose.connect('mongodb://localhost:27017/Lerning') //connct dB with

const employeSchema = new mongoose.Schema({     // Create Schema
    name: String,
    Email:{
        type:String,
        required: true
    },
})
// Create Model 
const epmloyees = mongoose.model("epmloyees",employeSchema)


const main =async ()=>{
    //now storing value into thedata base
    let data = new epmloyees({
        name: "yusuf New",
        Email:"yusuf@mail.com",
        age:56,
        Department:"IT"
    })
    // Saving Data 
    let result = await data.save()
    console.log(result);
}
// main();




const update = async ()=>{
    let result =await epmloyees.updateOne(
        {name:"Mohammad"},
        {$set:{Email:"test@gmail.com"}})
    console.log(result);
}
// update()

const deleteData = async ()=>{
    let result =await epmloyees.deleteOne(
        {Email:"Flash@gmai.com"})
    console.log(result);
}
// deleteData()

// const findData = async ()=>{
//     let result =await epmloyees.find(
//         {Email:/.*@.*mai.*\.com/})
//     console.log(result);
// }
// findData()