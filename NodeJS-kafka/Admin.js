const {kafka} = require("./Client")
const admin = kafka.admin()


async function init(){
    const admin = kafka.admin()
    await admin.connect()
    console.log("Kafka admin connected .....");
    

    console.log("\nNew Topic is creating...");
    await admin.createTopics({
        topics:[
            {
                topic: "Rider-update",
                numPartitions: 2,
                replicationFactor: 3
            }
        ]
    })
    console.log("\nTopic is created");
    let topics = await admin.listTopics()

    console.log("Topic are : ",topics);

    // console.log("topics are: ",topics);

    // console.log("Deleting the topic...\n");
    // await admin.deleteTopics({
    //     topics: ["NewTopic"],
    //     timeout: 100
    // })
    // console.log("topic deleted now topics are \n");
    // topics = await admin.listTopics()
    // console.log("Topic : ", topics);

    await admin.disconnect()
    console.log("\nKafka admin Disconnected");
}
init()