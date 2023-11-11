const firstPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Solved")
        reject("Failed")
    },200)
})

firstPromise.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Moatassem is good boi")
})

// other way of calling
// in case of reject 2nd anonyms function will be executed
firstPromise.then((result)=>{
    console.log(result)
},
()=>{
    console.log("2nd function in then executed in case of reject")
}
)

// ///////////////////////////////
//                      / Fulfilled                                         
// promise --pending => 
//                      \ Rejected
// ///////////////////////////////
// refrence video : https://www.youtube.com/watch?v=AShcK_VtWAY&list=PLL_QnA355DUif_kr7GaNgGUaUFR_Oqtfg&index=74



// Promises are by default async
// where callbacks are not async by default, we make them by using functions like setTimeout

// Chaining

const p = Promise.resolve("Done");

p.then((val)=>{
    console.log(val)
    return val+1;
}).then((val)=>{
    console.log(val)
    return val+1;
}).then((val)=>{
    console.log(val)
    // return val+1;
    throw "Error Detected"
}).then((val)=>{
    console.log(val)
    return val+1;
}).catch((err)=>{
    console.log(err)
})
// in this way I can link a lot of operations and avoid callback hell
// also a single catch can handle errors

