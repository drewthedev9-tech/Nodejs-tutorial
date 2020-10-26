const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')

    .then(()=> console.log('connected to mongDB ...'))
    .catch(err=> console.error("could not connect to mongodb..", err));


 const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

// see exc3 image for criteria taht this fucntion meets.
async function getCoursesExc3() {
    // in meaning has 'backend or "frontend" in the query
    const courses = await Course
  .find({ isPublished: true})
//   $gte is greater than or equal to "mongoDB operators".
  .or([
      {price:{$gte: 15}},
    //reg-ex: 0 or more chareters before and after the word "by".
  {name: /.*by.*/}

  ])
//   desc order
  .sort({price:-1})
  // get name,author, price
  .select(' name author price' );

  console.log(courses);
}

getCoursesExc3();