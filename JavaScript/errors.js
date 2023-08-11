// Here are some of the most common errors in JavaScript: 

// ReferenceError 

// SyntaxError 

// TypeError 

// RangeError

// There are some other errors in JavaScript. These other errors include: 

// AggregateError 

// Error 

// InternalError 

// URIError

// However, in this reading I'll focus on the Reference, Syntax, Type, and Range errors.

// ******************************************************************************
// ReferenceError
console.log(username); //Uncaught ReferenceError: username is not defined

// SyntaxError
var a "there's no assignment operator here";//Uncaught SyntaxError: Unexpected string

// TypeError
"hello".pop() // Uncaught TypeError: "hello".pop is not a function

// RangeError
// Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (i.e binary number).
(10).toString(2); // '1010'
// Besides using Base 2 number system, I can also use the Base 8, like this:
(10).toString(8); // 12
// However, if I try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JavaScript, I will get the RangeError,
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
