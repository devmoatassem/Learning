const readline = require("readline")
const rlData = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
});

rlData.question("What is you battery now? ", (battery)=>{
    console.log("Hi bro my batter is %d",battery)
    rlData.close();
})


//  there's another library we can use 
// npm i prompt-sync