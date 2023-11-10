// READ EVALUATE PRINT LOOP

//  In nodeJs terminal I can acess methods of a module by typing 
// ModuleName. 
// 

// ///////////////////////////////
// We can start NodeJs terminal using 
const repl = require("repl");
const a = repl.start("Heheh>");


a.on("exit", ()=>{ // on function listen to events for exts etc
    console.log("We're exiting")
    process.exit(); // to exit console
})

