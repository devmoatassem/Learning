const person = {
    name: "MMM",
    id: 234,
    address: {
        city: "KWL",
        street: 23
    }
}

// De-structuring
const {name, id : personID, age: personAge = 50 , address:{city}}=person

console.log(name,personAge,city)
console.log(personID)


function testF({name, id : personID, age: personAge = 50 , address:{city}}){
    console.log(name,personAge,city)
    console.log(personID)
}
testF(person)


const fruits = ['f1','f2','f3','f4','f5','f6']
const [f1,,f4,...fruits2]=fruits
console.log(f1,f4)
console.log(fruits2)