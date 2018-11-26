const assert = require("chai").assert;

const myApp = require('./src/main');

describe('Factorial', function(){

    describe('handle valid input', function(){
        it('would return 6 as factorial for 3', function(){
            assert.equal(myApp.computerFactorial(3), 6);
        });
        
        it('would return 120 as factorial for 5', function(){
            assert.equal(myApp.computerFactorial(5), 120);
        });
    })

    describe('handle invalid input', function(){
        it('would return undefined as factorial for -5', function(){
            assert.equal(myApp.computerFactorial(-5), 'undefined');
        });
        
        it('would return undefined as factorial for "demo"', function(){
            assert.equal(myApp.computerFactorial("demo"), 'undefined');
        });
    })
})