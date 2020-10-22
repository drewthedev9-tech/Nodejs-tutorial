// getting the courses from database and queerying them based on key, value pairs
async function getCourses(){
    // find returns a document.queryobject
    // Reg expressions
    const courses = await Course
    //regular expressions  
    // ^string starts with Mosh  
    .find({author: '/^Mosh/'})
    // ends with hamedani
    .find({ author: /Hamedani$/i})
    // Contains Mosh i = insensitive casing 
    .find({ author: /.*Mosh*./i})
    .limit(10)
    // sort by name 1 means to sort in ascending order. -1 descending order.
    .sort({ name: 1})
    // select properties you want to be returned
    .select({name:1, tags: 1})
    console.log(courses);
}

getCourses();