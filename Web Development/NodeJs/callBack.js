console.log("Start")

setTimeout(() => {
    console.log("1 Sec Delay")
}, 1000)

setTimeout(() => {
    console.log("0 Sec Delay")
}, 0)

console.log("End")

/////////////////////
// Output///////////
// Start
// End
// 0 Sec Delay
// 1 Sec Delay
////////////////////
// Concept//////////
// So when line by line code is being called and when we reach setTimeout it waits for event of passing given interval Time
// after event it puts function to event loop/callBack queue and callback queue starts running after main code is executed completely
// in other words after call stack gets empty then callback start getting evaluated
// Video refrence : https://www.youtube.com/watch?v=FVZ-A_Akros


// Example-2

function cb1(cb2) {

    setTimeout(() => {
        cb2(
            undefined, "Data Provided"
        )
    },100)

}

function cb2(err, result) {
    if (err) {
        return console.log(err);
    }
    console.log(result);
}

cb1(cb2)