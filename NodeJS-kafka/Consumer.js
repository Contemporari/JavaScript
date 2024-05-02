const {kafka} = require("./Client")
const group = process.argv[2]

async function init(){
    const consumer = kafka.consumer({groupId:group});

    console.log("Connecting to consumer group...");
    await consumer.connect()
    console.log("Connected to consumer group");

    await consumer.subscribe({topics:["Rider-update"],fromBeginning:true})
    console.log("Topic Rider-update is subscribed.");


    await consumer.run({
        eachMessage: async({ topic, partition, message, heartbeat, pause })=>{
            console.log(`group: ${group}, topic: ${topic}, partition:  ${partition} `,message.value.toString());
        }
    })
}
init()