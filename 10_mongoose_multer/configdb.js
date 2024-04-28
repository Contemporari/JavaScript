const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Lerning')




// systemLog:
//     destination: file
//     path: c:\mongo\logs\mongod.log
// storage:
//     dbPath: c:\mongo\data
// processManagement:
//    windowsService:
//       serviceName: "MongoDB"
//       displayName: "Mongo DB"
//       description: "mongod service"
// net:
//    port: 20000