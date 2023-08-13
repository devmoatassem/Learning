// Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

// Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  
console.log(`Hello, World!`)

// /////////////////////////////////////////////////
// Differences between a template and regular string
// First, it allows for variable interpolation:
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
// Besides variable interpolation, template strings can span multiple lines.
console.log(`Hello,
World
!
`)
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 12 + 1 + 1} stars!`) 