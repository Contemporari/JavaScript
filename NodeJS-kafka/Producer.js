const {kafka} = require("./Client");
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
async function init(){
    const producer = kafka.producer( {allowAutoTopicCreation: false});
    
    console.log("Connecting Producer...");
    await producer.connect()
    console.log("Producer Connected.");

    rl.prompt(">")
    rl.prompt();
    rl.on("line",async function(line){
        const [riderName,location]= line.split(' ');

        console.log("Sending Messages...");
        await producer.send({
        topic: 'Rider-update',
        messages: [
            {
                partition: location.toLocaleLowerCase()==="delhi"?0:1,
                key:"update-location",
                value: JSON.stringify({name:riderName ,location:location})}
        ]
    })
    }).on('close',async function(){
        await producer.disconnect()
        console.log("Producer Disconnected");
    })
}
init()