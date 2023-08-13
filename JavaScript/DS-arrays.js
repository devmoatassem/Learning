// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
// To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
// note we can also pass a function like this
// ///////////////////////////////////////////////////////////

// The filter() method
const nums = [0,10,20,30,40,50];
var retue=nums.filter( function(num) {
    return num > 20;
})
console.log(retue)//[ 30, 40, 50 ]
// Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

// /////////////////////////////////////////////////////////

// The map() method
var mp=[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(mp)//[ 0, 1, 2, 3, 4, 5 ]
// so basicaally edit the contents of an array and then adding it to anonther array


