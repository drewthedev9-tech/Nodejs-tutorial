// requirw takes one argument loads the module.
// pulls in the logger module/file.
var logger = require("./logger");

// object fom other module.
logger.log("message");
// function fromt the other module.
// logger("message")

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);