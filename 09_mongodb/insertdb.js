const db1 = require('./mongodb');

// async function insertFn(){
//     let data = await db1()
//     let result = await data.insertFn(
//         {email:"test@123",language:"Data Science"}
//     );   
//     console.log(result);
// }

const insert = async () =>{
    const data = await db1();
    const result = await data.insertMany([
       {name:"xyz",age:5,email:"xyz@test.com",language:"china",local:"no"}  
    ]
    );   
    if(result.acknowledged){
    console.log("Data Inserted \nId is : ",result.insertedIds);
    }
}
insert();
