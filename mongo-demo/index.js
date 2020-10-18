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
async function createCourse(){
    // like a Class
    // name for the collection, shape of documents in mongodb
   const Course = mongoose.model("Course", courseSchema);
   // like a object => gets mapped to the "Course" document(code line above) in a monngdb database.
  const course = new Course({
      name: 'Angular Course',
      author: 'Mosh',
      tags:['angular','frontend'],
      isPusblished: true
  });

// this is a async operation - takes time because we are dealing with the file system.
 const result = await course.save();
 console.log(result)
}

createCourse();
 