const lib = require('../lib')


// make sure that all your excecution paths are tested.
// module.exports.absolute = function(number) {
//     if (number > 0) return number; 
//     if (number < 0) return -number; 
//     return 0; 
//   } will be teting this pice of logic in lib.js

describe('absolute', ()=>{
    test ('should return a positive number if input is positive', ()=>{
        const result = lib.absolute(1);
        // toBe = matcher function - look up in Jest website
        expect(result).toBe(1)
    });
    
    test ('should return a positive number if input is negative', ()=>{
        const result = lib.absolute(-1);
       
        expect(result).toBe(1)
    });
    
    test ('should return 0 if input is 0', ()=>{
        const result = lib.absolute(0);
       
        expect(result).toBe(0)
    });
    
})


describe('greet',()=>{
    test("should return the greeting message", ()=>{
        const result = lib.greet('Mosh');
        // reg ex as long as we have "mosh" it will work and return.
        expect(result).toMatch(/Mosh/);
        // toContain you dont need regex.
        expect(result).toContain("Mosh");
    });
    
})



