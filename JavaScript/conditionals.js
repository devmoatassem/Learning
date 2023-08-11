var light="green";

// using if , else if, else
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

// using switch

switch(light){
    case "green":
        console.log("Drive");
        break;
    case "red":
        console.log("Stop");
        break;
    case "organge":
        console.log("Slow down");
        break;
    default:
        console.log("Light is off")
        break;
}

// whenever a case is true it run that case and due to break statement in that case it run only that case
// But if we don't use break
// It'll continue running statements below the true case
// in above example if case is red it'll run the red and orange case too (below it) but not default and green case(above it)
var light="red";
switch(light){
    case "green":
        console.log("Drive");

    case "red":
        console.log("Stop");

    case "organge":
        console.log("Slow down");
   
    default:
        console.log("Light is off")

}