 const express = require('express');
 const router = express.Router();
 const Joi = require('joi');


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
router.get('/', (req,res)=>{
    res.send(courses);
});

router.get('/:id', (req,res)=>{
    // parseInt gloabla JS variable turn string into integer
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        // 404 - object not found.
        res.status(404).send('the course with the given ID was not found.');// 404 bad request 
        return;
    }
   
    res.send(course);
   });

// post methods  adding a name to course array.
router.post('/', (req, res)=>{
    //input validation of error.
    const result = validateCourse(req.body);
    if (result.error){
        // getting the details array from response of using Joi validation.
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
router.put('/api/courses/:id', (req, res)=>{
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


// Delete requests /////////////
router.delete('/api/courses/:id',(req,res)=>{
    // look up the course
    // if it doesnt exist, return 404.
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('the course with the given ID was not found.');// 404 bad request 
        return;
    }

    // delete request
    // find the index from course above
    const index = course.indexOf(course);
    // cut out based on that index see MDN docs.
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

module.exports = router;