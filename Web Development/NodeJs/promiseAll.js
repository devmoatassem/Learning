
// Promise.all
// if I want to call multiple API calls at once
const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("API done in time = "+ time)
        },time)
    })
}

let multipleAPI = [makeApiCall(300),makeApiCall(400),makeApiCall(500),makeApiCall(600)]

// run all promise asynchrously and get return values in an array
Promise.all(multipleAPI).then((values)=>{
    console.log(values)
})

// determine which one run the first 
Promise.race(multipleAPI).then((value)=>{
    console.log("First run "+value)
})
