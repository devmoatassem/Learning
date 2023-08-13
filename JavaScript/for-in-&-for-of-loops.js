// For-of loops with objects
const car = {
    speed: 100,
    color: "blue"
}

/*
for(prop of car) {
    console.log(prop)
}
*/ //Uncaught TypeError: car is not iterable
//Objects are not iterateable directly
// /////////////////////////////////////////////////////



// But arrays are
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

// also if we use for in for array we get index
for (color in colors) {
    console.log(color);
}
// //////////////////////////////////////////////////////

// Object.keys() method 
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// Object.values() method
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries() method
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

// /////////////////////////////////////////////////////////
// Iterating over an object keys using for-of loop
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

// /////////////////////////////////////////////
// Difference between for-in and for-of loop
const bikes={
    model :"Honda",
    cc:1000,


}

const cd70 = Object.create(bikes);
cd70.efficiency="40KM/L";
// Now see parent object has different properties but child has one property efficiency
// for in loop
for (key in cd70){
    console.log("For in Loop : ",key,':',cd70[key])
}//see it iterate over the parent properties too 

const prop=Object.keys(cd70);// this method only return the child object properties in an array
console.log(prop);//efficiency 

// for of loop
for (key of Object.keys(cd70)){
    console.log("For of Loop: ",key,":",cd70[key]);
}// this only gives us the properties of the child object

