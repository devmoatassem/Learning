var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

console.log(fruits)

fruits.pop();
console.log(fruits); // ['apple']
// ///////////////////////////////////////////////////
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
// //////////////////////////////////////////////////////////////

