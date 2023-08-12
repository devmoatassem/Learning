class CAR{
    constructor(color,model){
        this.color=color;
        this.model=model;//this keyword helps create new object instance that will have these properties

    }

}

var MyCar= new CAR("White","2003");
console.log(MyCar); // see you get an object of CAR but with properties you mentioned

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// We can create functionality too using classes 
class Airplane{
    constructor(company,fit,fare){
        this.company=company;
        this.fit=fit;
        this.fare=fare;

    }
    doublefare(){
        this.fare=this.fare*2;
    }
    halffare(){
        this.fare=this.fare/2
    }
    changefitness(){
        this.fit=!this.fit;
    }
    getprototype(){
        var proto=Object.getPrototypeOf(this);
        console.log(proto);
    }
    getself(){
        console.log(this);
    }
}

var myplane=new Airplane("Airbus",true,200);
console.log(myplane);
myplane.changefitness();
console.log(myplane);
myplane.doublefare();
console.log(myplane);
// The getPrototype() console logs the prototype of the object
// instance of the Train class. The prototype holds all the 
// properties shared by all the object instances of the Train 
// class. To get the prototype, you'll be using JavaScript's 
// built-in Object.getPrototypeOf() method, and passing it this object - 
// meaning, the object instance inside of which this method is invoked.
myplane.getprototype();

myplane.getself();//The getSelf() method prints out the properties on the object instance it is called on.

// sub-class that overides some properties of super class
class Jet extends Airplane{
    constructor(company,fit,fare,engines,supersonic){
        super(company,fit,fare); //super is used to specify what property gets inherited from the super-class in the sub-class.
        this.engines=engines;
        this.supersonic=supersonic;
    }
    //Now we have automatically inherit all the methods of super class
    changemode(){
        this.supersonic=!this.supersonic;
        console.log("Supersonic Status Now:",this.supersonic);
    }
    //Now I want to modify double fare method from parent class
    doublefare(){
        this.fare=this.fare*this.engines;
        super.doublefare();
        // super.halffare();
    }//so first I changed the fare to new value based on engines and then doubled the fare and then make it half again so a completely new way to increase fare in jet airplane

}


var jet1=new Jet("Lockhead",true,3000,4,true);
console.log(jet1)
jet1.doublefare();
console.log(jet1)

jet1.changefitness();//see I can acess methods of super class(parent class)
jet1.getself();