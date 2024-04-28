const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "Lerning";

// ############################# FULL FUNCTION .THEN AND .CATCH HANDALLED ###################

// async function databaseConnection(){
// client.connect()
// .then(()=>{
// let learningDb = client.db(database)
// let db = learningDb.collection('NodeJs')
// console.log("DB connected...");
// return db.find({name:'Yusuf'}).toArray()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
// console.log("error occured ",error)
// }).finally(()=>{
//     client.close()
// })
// }

// ##################################### FULL FUNCTION ASYNC AND AWAIT HANDALLED ################

// async function databaseConnection(){
//     try{
//         await client.connect()
//         let learningDb = client.db(database)
//         let db = learningDb.collection('NodeJs')
//         console.log("DB connected...");
//         let data = await db.find({}).toArray()
//         console.log(data)
//     }
//     catch(error){
//         console.log("error occured ",error)
//     }finally{
//         // await client.close()
//         console.log('Task Done');
//     }
// }
// databaseConnection()

// ############################## ONLY CONNCTON TO DB AND RETURNED COLLECTION ###########
async function databaseConnect() {
  try {
    await client.connect();
    let learningDb = client.db(database)//or .collection("NodeJs");
    return learningDb.collection("NodeJs");
  } catch (error) {
    console.log("error occured ", error, "\n===> Check This ");
  }
}

module.exports = databaseConnect;
// ############################### HERE HANDLING WITH .THEN AND .CATH #########################
// databaseConnect().then(  (res)=>{
//     res.find({}).toArray()
//     .then((data)=>{
//         console.log(data)
//     })
// })

// ################################ HANDLE MIX OF ASYSC AND .THEN #############
// databaseConnect()
// .then(async (res)=>{
//     let data = await res.find({}).toArray()
//     console.log(data)
// })


// #### THIS IS CALLING AND HANDLING THIS WE WILL USE IN ANOTHER FILE #########################

// let oprationOnDB = async ()=>{
//     let data = await databaseConnect()
//     data = await data.find().toArray()
//     console.log(data)
// }

// oprationOnDB()
