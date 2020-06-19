var url = 'http://mylogger.io/log';

function log(message){
    // send and hhtp request
    console.log("mesaage")
}

// exports the file(module) to be usedn other files
// called it log
module.exports.log = log;
// exporting just a function.
// module.exports = log
