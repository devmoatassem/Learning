// ///////////////////////////////////////////////////////////////////////
// Here's a list of all the methods covered in this cheat sheet:

// charAt() 

// concat() 

// indexOf() 

// lastIndexOf() 

// split() 

// toUpperCase() 

// toLowerCase() 


var greet = "Hello, ";
var place = "World";

// /////////////////////////////////////
// All strings have at their disposal 
// several built-in properties, but 
// there's a single property that is 
// really useful: the length property, 
// which is used like this:
console.log(greet.length); // 7

// //////////////////////////////////////////////////
// To read each individual character at a specific 
// index in a string, starting from zero, I can use 
// the charAt() method: 
console.log(greet.charAt(1)); // 'e'

// /////////////////////////////////////////////////
// The concat() method joins two strings:  
console.log("Wo".concat("rl").concat("d"));//World

// ///////////////////////////////////////////////
// The indexOf returns the location of the first 
// position that matches a character: 
// The lastIndexOf finds the last match, otherwise
// it works the same as indexOf.
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2

// //////////////////////////////////////////////////////
// The split method chops up the string into an array of sub-strings:
console.log("ho-ho-ho".split("-"));// ['ho', 'ho', 'ho']

// /////////////////////////////////////////////
// There are also some methods to change the casing of strings. For example:  
console.log(greet.toUpperCase()); // "HELLO, "
console.log(greet.toLowerCase()); // "hello, "


 