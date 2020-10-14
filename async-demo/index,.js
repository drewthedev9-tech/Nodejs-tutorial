cosnole.log('beofre');
 getUser(1, function(user){
console.log('User', user);
});
cosnole.log('after');
function getUser(id, callback){
    setTimeout(()=>{
        console.log('reading a user from database...');
        callback({ id: id, gitHubUsername: 'mosh'})
    }, 2000);
}