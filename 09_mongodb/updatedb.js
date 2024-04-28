const db1  = require('./mongodb');


(async function update(){
    const data = await db1()
    let result = await data.updateMany(
        {language:"English"},
        {$set:{age:14}}
    )

    console.log(result);
})();