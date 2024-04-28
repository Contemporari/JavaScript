const db1 = require('./mongodb')


const remove = (async()=>{
    const data = await db1()
    const result = await data.deleteMany({language:"Usa"})
    console.log(result)
})();