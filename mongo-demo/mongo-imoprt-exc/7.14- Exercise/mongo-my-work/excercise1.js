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

async function getCourses() {
    const courses = await Course
  .find({ isPublished: true, tags: 'backend' })
  .sort({ name: 1 })
  .select({ name: 1, author: 1,
   });

  console.log(courses);
}





getCourses();