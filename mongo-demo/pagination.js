// getting the courses from database and queerying them based on key, value pairs
async function getCourses(){
    const pageNumber = 2;
    const pageSize = 10 ;
    // might have a APi endpoint like this.
    // /api/courses?pageNumber=2&pageSize=10
   
    const courses = await Course
    // .find({ author: "Mosh"})
    .skip((pageNumber -1) * pageSize)
    .limit(pageSize) //skipi plus limit give you pagination
    // sort by name 1 means to sort in ascending order. -1 descending order.
    .sort({ name: 1})
    // select properties you want to be returned
    .select({name:1, tags: 1})
    console.log(courses);
}

getCourses();