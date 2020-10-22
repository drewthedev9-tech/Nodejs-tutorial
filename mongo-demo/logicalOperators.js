// getting the courses from database and queerying them based on key, value pairs
async function getCourses(){
    // find returns a document.queryobject
    // or
    // and
    const courses = await Course
    // .find({ author: "Mosh"})
    .find()
    .or([{author: "Mosh"}, {isPublished}])
    .and([])
    .limit(10)
    // sort by name 1 means to sort in ascending order. -1 descending order.
    .sort({ name: 1})
    // select properties you want to be returned
    .select({name:1, tags: 1})
    console.log(courses);
}

getCourses();