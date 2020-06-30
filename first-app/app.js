// requirw takes one argument loads the module.
// pulls in the logger module/file.
//var logger = require("./logger");

// object fom other module.
//logger.log("message");
// function fromt the other module.
// logger("message")

//const path = require('path');

//var pathObj = path.parse(__filename);

// console.log(pathObj);

// OS module.
// const os = require('os');
// const totalmemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log("total Memory:" + totalmemory);

// Template string
// ES6 
// console.log(`Total memory: ${totalmemory}`);
// console.log(`free memory: ${freeMemory}`);

// file system 
// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// readirr is a async function. has a call bacl function

// const files1 = fs.readdir('./', function(err, files){
//    if (err) console.log('Error', err); 
//    else console.log('Result', files);
// });
// console.log(files1)

// events////////////////////////
// class Upper case letetrs EventEmitter.
const EvenEmitter = require('events');



// loading the log function from logger.
// const Logger = require('./logger');
// // creating an instance / object with the new key word
// const logger = new Logger();

// //register a listener
// // has a call back function.
// logger.on("message logged",(arg)=>{
//     console.log("listener called", arg);
// });


// logger.log('message');

const http = require('http');

//usual method for making a web server
const server = http.createServer((req, res)=>{
    if(req.url === './'){
        res.write("hello world");
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.strigify([1,2,3,4,5]));
        res.end();
    }
});



server.listen(3001);

console.log('listening on port 3001...');








