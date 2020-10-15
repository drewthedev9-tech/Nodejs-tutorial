cosnole.log('beofre');
 getUser(1, function(user){
console.log('User', user);

// get the repositiries
getRepositories(user.gitHubUsername,(repos)=>{
    console.log('Repos',repos)
    // call Back hell 
})

});
cosnole.log('after');
function getUser(id, callback){
    setTimeout(()=>{
        // simulating reading from 
        console.log('reading a user from database...');
        callback({ id: id, gitHubUsername: 'mosh'})
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(()=>{
        // simulating reading from 
        console.log('calling API for gitub repos....');
        callback([repo1,repo2,repo3]);
    }, 2000);
   
}