const mongoose = require('mongoose');

// references connecion to mongodb on this machine
// in a real worl application you should connect with
// string from config flder for different env like deploment etc.

mongoose.connect('mongodb://localhost/mongo-playground')
    .then(()=> console.log('connected to mongDB ...'))
    .catch(err=> console.error("could not connect to mongodb..", err));

    // defines the shape of documents in mongodb database.
    const courseSchema = new mongoose.Schema({
        name:String,
        author: String,
        tags:[String],
        date: {type: Date, default: Date.now},
        isPublished: Boolean
    })

    // Model is like a class model needs to be comiled from schema(above).
    // calss => object
    // Course => Nodecourse
   // like a Class
    // name for the collection, shape of documents in mongodb
const Course = mongoose.model("Course", courseSchema);

async function createCourse(){
 
// change the values of this course object to enter different data.
// like a object => gets mapped to the "Course" document(code line above) in a monngdb database.
  const course = new Course({
      name: 'Angular Course',
      author: 'Mosh',
      tags:['angular','frontend'],
      isPublished: true
});

// this is a async operation - takes time because we are dealing with the file system.
// saving it to  the database.
 const result = await course.save();
 console.log(result)
}

// getting the courses from database and queerying them based on key, value pairs
async function getCourses(){
    // 
    // find returns a document.queryobject
    const courses = await Course
    .find({ author: "Mosh"})
    .limit(10)
    // sort by name 1 means to sort in ascending order. -1 descending order.
    .sort({ name: 1})
    // select properties you want to be returned
    .select({name:1, tags: 1})
    // count() counts how many documnets match the filter above// 2 in database.
    console.log(courses);
}

getCourses();
// createCourse();
 