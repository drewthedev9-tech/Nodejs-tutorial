const express = require("express");
// calling express function from frameworks
const app = express();


// corresponding http methods.
// api endpoint that will respond to a get method.
// root of the argument(endpoint) and a 
//call back function(routehandler) with request and respond argument.
// 

app.get('/', (req, res)=>{
    res.send("hello world");
});

app.get('/api/courses', (req,res)=>{
    res.send([1,2,3]);
});


app.listen(3000, ()=> console.log('listening on port 3000.... '))