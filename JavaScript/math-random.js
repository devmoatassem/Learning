var random=Math.random()//it generates the value between 0-0.99

console.log(random)

// so if I need a number between 0-9 then I'll have to multiply it by 10

console.log(random*10)

// and If I want integer only then I use round function 

console.log(Math.round(random*10))


// there are two other round methods available too 

console.log(Math.ceil(0.00001))//always round up
console.log(Math.floor(1.91))//always round down
