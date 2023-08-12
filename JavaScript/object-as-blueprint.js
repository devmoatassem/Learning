var bird={
    canFly:true,
    hasWings:true,
    hasBones:true,
}


// Now I can create instances of above object 
var crow= Object.create(bird);

console.log("crow",crow);// see an empty object
console.log("crow",crow.canFly); // But I can acess parent object properties


// If i change a special property then upon call I'll get the answer of changed property
var chicken=Object.create(bird);// empty object
console.log("Chicken",chicken);
chicken.canFly=false;
console.log("Chicken",chicken);//see now it's not an empty object now it contains the changed propety
console.log("chicken",chicken.hasWings);//but I can also acess parent properties at the same time