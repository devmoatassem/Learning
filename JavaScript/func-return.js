console.log("Returned value: ",console.log('Hello'));   // it returns undefined 

function consoleLog(val) {
    console.log(val)
    return val
}

console.log("Returned value: ",consoleLog('Hello'))
// so we can see what function returns

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

console.log(objectMaker(20))
// see it returns an object with prop as key and value 20

console.log(doubleIt(10).toString()) //it returns 20 as string "20"

 console.log(objectMaker( doubleIt(100) )) //we can combine custom functions like this
 
function printName(name){
    console.log(name);
}

console.log(printName("Moatassem")); //we can see here even in custom functions if there's nothing returned then it returns undefined


