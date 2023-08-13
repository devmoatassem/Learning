let {PI}=Math;
console.log(PI)
//I extracted the PI proper ty of Math object
let {pi}=Math;
console.log(pi)//undefined
//it's case senstive
PI=22;
console.log(PI);
// independent of parent object 

// so conclusively we can extract different objects properties into variables but remember these variables are independent of their parent object
