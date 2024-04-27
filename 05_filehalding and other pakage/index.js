// ################################# COLORFUL COLOR###########################

// var colors = require('colors');
// console.log('hello_world_how_are_you\n'.trap); // outputs green text
// console.log('i like cake and pies\n'.underline.red) // outputs red underlined text
// console.log('inverse the color\n'.inverse); // inverses the color
// console.log('OMG Rainbows!\n'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// var colors = require('colors');
// console.log(colors.green('hello')); // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')); // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow
// console.log(colors.trap('Run the trap')); // Drops the bass

// var error = colors.bgGreen;
// console.log(error('this is red'))

// colors.setTheme({
//     custom: ['red', 'underline','bgWhite']
// });
// console.log('test'.custom);





//########################## CHALK USED ALSO COMMON JS AND MODULE JS ###############

// "type":"module",   // mention this in pakage.json file for treat as module js

// // const chalk = require('chalk');
// import chalk from 'chalk';
// const log = console.log;

// log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// log(chalk.green(
//     'I am a green line ' +
// 	chalk.blueBright.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));





// #################################### SIMPLE API ########################################

// const http = require('http')
// // const data = require('./app.js')
// const data = require('./app.js')

// http.createServer((req,resp)=>{
//     resp.writeHead(404,{'Content-Type':'application\jason'})
//     resp.write(JSON.stringify(data))
//     resp.end()
// }).listen(5000)


// ##################################### CURD OVER FILE ############################

// const path = require('path')
// const fs = require('fs')
// let dirpath = path.join(__dirname,'filehandle')
// let filepath = dirpath+'/fruit.txt'

// console.log(dirpath);

// fs.writeFileSync(filepath,"this text you can find in the file")

// fs.appendFile(filepath,'\nnew appened text !!!',(err)=>{
//     if(err) throw err;
//     console.log("text Added ");
// })

// fs.rename(filepath,`${dirpath}/new.txt`,(err)=>{
//     if(err) throw err
//     console.log("Renamed Succesfully");
// })

// console.log(`${dirpath}/fruit.txt`);


// fs.unlinkSync(`${dirpath}/new.txt`)


