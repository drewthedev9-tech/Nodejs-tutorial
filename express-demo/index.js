const express = require("express");
// calling express function from frameworks
const app = express();

const courses = [
    { id:1, name: 'course1'},
    { id:2, name: 'course2'},
    { id:3, name: 'course3'},
];
// corresponding http methods.
// api endpoint that will respond to a get method.
// root of the argument(endpoint) and a 
//call back function(routehandler) with request and respond argument.
// res.send responding to the client side.
// route handler functions
app.get('/', (req, res)=>{
    res.send("hello world");
});

app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req,res)=>{
 const course =  courses.find(c => c.id === parseInt(req.params.id));
 if (!course) 
 res.status(404).send('the course with the given ID was not found.');// 404 bad request 
 res.send(course);
});

// environment variables;
 const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port....${port} `));