// Logical AND &&
console.log(5<10 && 5>1); //true

console.log(2<5 && 2>3); //false

// Logical OR ||

console.log(5>10 || 5<1); //false

console.log(2<5 || 2>3); //true

// Logical NOT !
var genuisMoatassem=true;
console.log("Moatassem is genuis:",genuisMoatassem);
// 
console.log("Moatassem is genius:"+!genuisMoatassem);

// Modulus %
console.log(25%5);
console.log(21%+2);// here 2 is actually added to the place where something should occur after % so a practice concatination in javaScript ;)

// Equality ==
console.log("Equality ==")
console.log(100==100)//true
console.log(100=="100")// true because javaScript compares the value in euality operator
console.log(10==100)//false
console.log("10"==100)//flase (because of value)

// Strict Equality ===
console.log("Strict Equality ===")
console.log(100===100)//true
console.log(100==="100")//false because strict equality also compares data type whicch is different here

// Inequality !=
console.log(5!=2)//true
console.log(5!='2')//true sama as previously it compares values
console.log(5!=5)//false

// Strict Inequality !==
console.log(5!=='2')//true 
console.log(5!='5')//true as here it also compares the data type

// + use cases
console.log("inter"+"net")//internet
console.log(365+" days")
/*
Here, JavaScript tries to help by converting the numbers to strings, and then concatenating the number and the string together, ending up with a string value.

The process of this "under-the-hood" conversion of values in JavaScript is referred to as "coercion". JavaScript coerces a number value to a string value - so that it can run the + operator on disparate data types.

The process of coercion can sometimes be a bit unexpected.
*/
console.log(1+"2")//12    Here javascript corce the the number 1 to string 

// Addition Assignment +=
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

// concatenation assignment operator, +=
var longstring="";
longstring+="Once";
longstring+=" upon";
longstring+=" a";
longstring+=" time."
console.log(longstring);

// Operator precedence and associativity
console.log(1 * 2 + 3); //5