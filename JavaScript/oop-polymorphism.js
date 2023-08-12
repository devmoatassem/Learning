// OOP Principles: Polymorphism

// Example -1 
// A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

// Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
console.log(bicycle.bell()); //

console.log(door.bell())

function ringTheBell(thing) {
    console.log(thing.bell())
}

// Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.
// So now, if I call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:
ringTheBell(bicycle); 
ringTheBell(door);

// Example - 2
// If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. 
console.log("abc".concat("def")); // 'abcdef'

// concat() method on two arrays.
console.log(["abc"].concat(["def"])); // ['abc', 'def']

// plus on Array
console.log(["abc"] + ["def"]); // ["abcdef"]

// Example - 3
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// The Penguin and Eagle sub-classes both inherit from the 
// Bird super-class. The Eagle sub-class inherits the 
// useWings() method from the Bird class, but extends it 
// with an additional console log. The Penguin sub-class 
// doesn't inherit the useWings() class - instead, it has 
// its own implementation, although the Penguin class itself 
// does extend the Bird class.  