// class Upper case letetrs EventEmitter.
const EvenEmitter = require('events');
// creating new instance using new Key word.
const emitter = new EvenEmitter();

var url = 'http://mylogger.io/log';

function log(message){
    // send and hhtp request
    console.log("mesaage")

    emitter.emit(messageLogged, {id:1, url: 'http//'})

}

// exports the file(module) to be usedn other files
// called it log
module.exports.log = log;
// exporting just a function.
// module.exports = log
