const promise = new Promise(function(resolve, reject){
    // kick off some async work
    // could be from database
    // settimeout will represent some async work.
    // kinda like get user
    setTimeout(()=>{
        // resolve(1); pending => resolved, fufilled.
        // simulate an error
        reject(new Error('message')); // pending => rejected
    },2000)
   

})

// consuming a prmise
// then is for success scenario, can chain on the reject error.
 promise.then(result =>  console.log("result",result))
//  each Error object in JS has a message property
.catch(err =>  console.log("Error",err.message));
