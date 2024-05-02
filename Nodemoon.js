var nodemon = require('nodemon'); 
const color = require('colors')

const file = "events"


nodemon({script: file}).on('start', () => {
    console.log(`[nodemoon] Program started ${file}.js !`.green);
}).on('restart', ()=>{
    console.log(`${color.yellow("[nodemoon]")} Program restarted ${file}.js !`.green);
}).on('quit', () => {
    console.log("Program exited cleanly.".green);
});