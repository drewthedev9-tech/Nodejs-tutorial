const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mongo-playground')
    .then(()=> console.log('connected to mongDB ...'))
    .catch(err=> console.error("could not connect to mongodb..", err));

    const courseSchema = new mongoose.Schema({
        name:String,
        author: String,
        tags:[String],
        date: {type: Date, default: Date.now},
        isPublished: Boolean
    })

   
const Course = mongoose.model("Course", courseSchema);

// query first -> good for hanfling iouts froma  client and you want to validate.
// this method udates a document in the databse by retrieving it first.
async function updateCourse(id){
// approach: query first
// findById -> returns a promise
 const course = await Course.findById(id);
 if(!course) return;
// modify its properties
course.isPublished = true;
course.author ='Another Author'
// save()
const result = await course.save();
console.log(result);

}

async function updateCourse2(id){
    // approach: update a documnet(s) directly 
    // findById -> returns a promise
     const course = await Course.updateMethod({isPublished: false},{
         
     });
     if(!course) return;
    // modify its properties
    course.isPublished = true;
    course.author ='Another Author'
    // save()
    const result = await course.save();
    console.log(result);
    
    }


updateCourse("5f8ca63493433702dc312c74");
