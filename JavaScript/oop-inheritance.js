// OOP Principles: Inheritance


// class Animal{//base class or Super class of Bird

// }
// class Bird extends Animal{//sub class of Animal and super class of Eagle

// }
// class Eagle extends Bird{//sub class of Bird

// }


// ////////////////////////////////////////////////////////
// Example from chatGPT to understand
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
}
  
class Bird extends Animal {
    constructor(name, wingspan) {
        super(name);
        this.wingspan = wingspan;
    }

    fly() {
        console.log(`${this.name} is flying with a wingspan of ${this.wingspan} inches.`);
    }
}
  
class Eagle extends Bird {
    constructor(name, wingspan, habitat) {
        super(name, wingspan);
        this.habitat = habitat;
    }

    soar() {
        console.log(`${this.name} is soaring high in the ${this.habitat}.`);
    }
}
  
  // Create an instance of Eagle
  const baldEagle = new Eagle("Bald Eagle", 72, "mountains");
  
  // Call methods from various classes
  baldEagle.speak(); // Output: Bald Eagle makes a sound.
  baldEagle.fly();   // Output: Bald Eagle is flying with a wingspan of 72 inches.
  baldEagle.soar();  // Output: Bald Eagle is soaring high in the mountains.
  