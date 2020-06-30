// class Upper case letetrs EventEmitter.
const EvenEmitter = require('events');


 var url = 'http://mylogger.io/log';

class Logger extends EvenEmitter{
     log(message){
        // send and hhtp request
        console.log(message);
    
        // raising an event
        this.emit('messageLogged', {id:1, url:'http//'});
    
    }
    
}

// exports the file(module) to be usedn other files
// called it log
module.exports = Logger;
// exporting just a function.
// module.exports = log
