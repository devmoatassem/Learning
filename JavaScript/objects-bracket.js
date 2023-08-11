// One way
var person={}

person.hair="black";
person.height=6;
person.nationality="Pakistani";
person.contact=923001234567
person["contact"]=92345678024 // Note this way is similar to dictionaries in python
// we can either declare whole object like this or create new object like this or even edit previous object like this
console.log(person);

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]) //brackets notation can evaluate expressions, arrOfKeys[i]
}


// it's kind of similar to struct in C and Dict in python
// but in this method it;s almost carbon copy of dictionaries in python
// with easy mutation now we get to evaluate expressions