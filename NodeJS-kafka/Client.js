const {Kafka} = require("kafkajs")

exports.kafka = new Kafka({
    clientId :"my-kafka-app",
    brokers:['localhost:9090','localhost:9091','localhost:9092']
})

