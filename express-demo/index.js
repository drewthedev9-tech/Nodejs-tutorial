const debug  = require('debug')('app:startup');

const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require("express");
// calling express function from frameworks
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');//default

// adding the middlwware for json handling
app.use(express.json());
// next passes control to the next middleware function
// in the pipeline.
app.use(function(req,res,next){
    console.log('logging.....');
    next();
})
app.use(helmet());
// any path that uses '/api/courses' use courses module in routes.
app.use('/api/courses', courses);
app.use('/', home);



// Configuration ////////////
console.log("Application name" + config.get('name'));
console.log("Mail server" + config.get('mail.host'));
console.log("Mail password" + config.get('mail.password'));

// custom middleware in the 
app.use(logger);
if(app.get('env') === 'development'){
    app.use(morgan('tiny')); 
    debug('Morgan enabled...');
}


// corresponding http methods.
// api endpoint that will respond to a get method.
// root of the argument(endpoint) and a 
//call back function(routehandler) with request and respond argument.
// res.send responding to the client side.
// route handler functions



// environment variables;
 const port = process.env.PORT ;
app.listen(port, ()=> console.log(`listening on port....${port} `));