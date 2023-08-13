// ... (three dots is syntax for spread and rest operator) but they do the opposite, 
// if I want to pass elements of an array to a function or any other array I don't have to write individual indexed items ar[0]...
// i can somply use ...arrname and pass it, it'll accept all of them as solo entries instead of an array
// let's see some use cases of spread operator


// Joining arrays
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// joining objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// Add new members to array without push()
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);//[ 'onion', 'parsley', 'carrot', 'beetroot' ]

// Convert a string into array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201
console.log(car1.speed, car2.speed)//201 200

// or array be like
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)//[ 'apples' ] not [ 'apple', 'pear', 'plum' ]

// /////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////////

function multi(multiplier,...data){
    return data.map(function(data_ent){
        return multiplier*data_ent;
    })
}


let reslt=multi(5,5,6,7,8,9,0)
console.log(reslt)//[ 25, 30, 35, 40, 45, 0 ]

// so in above function I have passed 7 values but function was accepting one value then 
// then function was using rest(...) operator 
// (so rest operator has converted multiple values into an array while spread operator convert the elements of an array to individual elements)

