// Using class instance as another class' constructor's property

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

/*
In this example, there are three classes defined: StationaryBike, Treadmill, and Gym.

The StationaryBike class is coded so that its future object instance will have the position and gears properties. The position property describes where the stationary bike will be placed inside the gym, and the gears propery gives the number of gears that that stationary bike should have.

The Treadmill class also has a position, and another property, named modes (as in "exercise modes").

The Gym class has three parameters in its constructor function: openHrs, stationaryBikePos, treadmillPos.

This code allows me to instantiate a new instance object of the Gym class, and then when I inspect it, I get the following information:

the openHrs property is equal to "7-22" (that is, 7am to 10pm)

the stationaryBike property is an object of the StationaryBike type, containing two properties: position and gears

the treadmill property is an object of the Treadmill type, containing two properties: position and modes

*/