// requirw takes one argument loads the module.
// pulls in the logger module/file.
var logger = require("./logger");

// object fom other module.
logger.log("message");
// function fromt the other module.
// logger("message")

const path = require('path');

var pathObj = path.parse(__filename);

// console.log(pathObj);

// OS module.
const os = require('os');
const totalmemory = os.totalmem();
const freeMemory = os.freemem();

// console.log("total Memory:" + totalmemory);

// Template string
// ES6 
// console.log(`Total memory: ${totalmemory}`);
// console.log(`free memory: ${freeMemory}`);

// file system 
const fs = require('fs');

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
// creating new instance using new Key word.
const emitter = new EvenEmitter();

//register a listener
// has a call back function.
emitter.on("messagelogged",(e)=>{
console.log("listener called", e);
} ) 

// raise an event
//making a noise passing an event. from emitter.on.
emitter.emit("messagelogged",{
    id : 1, 
    url:'http://'
});

// raise:logging event (data:message)





