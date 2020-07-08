const Joi = require('joi');
const express = require("express");
// calling express function from frameworks
const app = express();
// adding the middlwware for jso. handling
app.use(express.json());

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
    if (!course) {
        res.status(404).send('the course with the given ID was not found.');// 404 bad request 
        return;
    }
   
    res.send(course);
   });

// post methods  adding a name to course array.
app.post('/api/courses', (req, res)=>{
    //input validation of error.
    const {error} = validateCourse(req.body);
    if (error){
        res.status(400).send(result.error.details[0].message);  
        return;
      }
    const course = {
        id: courses.length + 1,
        name:req.body.name
    };
    // push onto array in server.
    courses.push(course);
    // return client on the sever.
    res.send(course);
});

// put methods///////////////////////////////
app.put('/api/courses/:id', (req, res)=>{
// look up the course
// if doesnt exist , 404 response
const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
    res.status(404).send('the course with the given ID was not found.');// 404 bad request 
    return;
}
    

const {error} = validateCourse(req.body);// object destructuring result.error.
if (error){
      res.status(400).send(result.error.details[0].message);  
      return;
    }
// update course
course.name = req.body.name;
// return the update to client\
res.send(course);

});

app.delete('/api/courses/:id',(req,res)=>{
    // look up the course
    // if it doesnt exist, return 404.
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('the course with the given ID was not found.');// 404 bad request 
        return;
    }
   
    // delete.
    const index = course.indexOf(course);
    courses.splice(index, 1);
    // return the same course.
    res.send(course);
})


// validation function.
function validateCourse(course){
    // validate the course
    // if invalid, return 400 - bad request.
    const schema = {
        name : Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}


// environment variables;
 const port = process.env.PORT ;
app.listen(port, ()=> console.log(`listening on port....${port} `));