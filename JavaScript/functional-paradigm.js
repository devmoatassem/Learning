// First-class functions

        // pass to other functions

        // save in a variable

        // return from other functions


        function addTwoNums(a, b) {
            console.log(a + b)
        }
        
        function randomNum() {
            return Math.floor((Math.random() * 10) + 1);
        }
        function specificNum() { return 42 };
        
        var useRandom = true;
        
        var getNumber;
        
        if(useRandom) {
            getNumber = randomNum
        } else {
            getNumber = specificNum
        }
        
        addTwoNums(getNumber(), getNumber())

// Higher-order function

    // It accepts other functions as arguments

    // It returns functions when invoked


    addTwoNums(specificNum(), specificNum()); // returned number is 84
    addTwoNums(specificNum(), randomNum()); // returned number is 42 + some random number
// Pure functions and side-effects

    // A pure function returns the exact same result as long as it's given the same values.
    function addTwoNums(a, b) {
        console.log(a + b)
    }
    addTwoNums(5,6); // 11
    //     Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

    // This includes: 

    // changing variable values outside of the function itself, or even relying on outside variables 

    // calling a Browser API (even the console itself!) 

    // calling Math.random() - since the value cannot be reliably repeated