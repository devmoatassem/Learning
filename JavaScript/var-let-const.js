// var keyword
// ///////////
/* 
1. We can acess a var variable before initilizing
at the condition it is initilized at some point in the program anywhere
*/

console.log(vark);

var vark;

/* 
2. We can re declare the same variable again in case of var
*/
var name="Moatassem";
var name="Brooo";

console.log(name);

// let keyword
// ///////////
/*
1. We cannot acess a let variable before it's is declared
*/
// console.log(letK);//error at run
let letK;

/*
2. we declare a let variable without assigning it 
*/
let ghj;
console.log(ghj);

/*
3. We can't redeclare the let variable
*/
// let ghj; // will give erro at uncomment 

/*
4. But we can re assign it 
*/
ghj="A";
console.log(ghj)//A
ghj="p";
console.log(ghj)//p

// const keyword
// /////////////

/*
1. Must be initilized

*/
// const user; //error

/*
2. can't re initlized 
*/
const abc=1;
// abc=2//Error
console.log(abc)


