const dbCall = require('./mongodb')

let oprationOnDB = async ()=>{
    let data = await dbCall()
    data = await data.find({}).toArray()
    console.log(data)
}
// let oprationOnDB = async ()=>{
//     let data = await dbCall()
//     data = await data.find({language:'Paython'}).toArray()
//     console.log(data)
// }

oprationOnDB()