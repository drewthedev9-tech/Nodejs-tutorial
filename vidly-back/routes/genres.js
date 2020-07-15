const express = require('express');
const router = express.Router();
const Joi = require('joi');


const genres = [
   { id:1, name: 'Action'},
   { id:2, name: 'Horror'},
   { id:3, name: 'Romance'},
];



// corresponding http methods.
// api endpoint that will respond to a get method.
// root of the argument(endpoint) and a 
//call back function(routehandler) with request and respond argument.
// res.send responding to the client side.
// route handler functions
router.get('/', (req,res)=>{
   res.send(genres);
});

router.get('/:id', (req,res)=>{

   const genre =  genres.find(c => c.id === parseInt(req.params.id));
   if (!genre) {
       res.status(404).send('the course with the given ID was not found.');// 404 bad request 
       return;
   }
  
   res.send(genres);
  });

// post methods  adding a name to course array.
router.post('/', (req, res)=>{
   //input validation of error.
   const {error} = validategenre(req.body);
   if (error){
       res.status(400).send(result.error.details[0].message);  
       return;
     }
   const course = {
       id: genres.length + 1,
       name:req.body.name
   };
   // push onto array in server.
   genres.push(course);
   // return client on the sever.
   res.send(genres);
});

// put methods///////////////////////////////
router.put('/:id', (req, res)=>{
// look up the course
// if doesnt exist , 404 response
const genre =  genres.find(c => c.id === parseInt(req.params.id));
   if (genre) {
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
res.send(genre);

});


// Delete requests /////////////
router.delete('/:id',(req,res)=>{
   // look up the course
   // if it doesnt exist, return 404.
   const course =  genres.find(c => c.id === parseInt(req.params.id));
   if (!course) {
       res.status(404).send('the course with the given ID was not found.');// 404 bad request 
       return;
   }

   // delete request
   const index = course.indexOf(course);
   genres.splice(index, 1);
   // return the same course.
   res.send(course);
})


// validation function.
function validateCourse(genres){
   // validate the course
   // if invalid, return 400 - bad request.
   const schema = {
       name : Joi.string().min(3).required()
   };
   return Joi.validate(genre, schema);
}

module.exports = router;