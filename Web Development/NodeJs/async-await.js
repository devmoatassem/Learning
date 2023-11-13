console.log("1")

function test1(){
    return Promise.resolve("Done")
}


async function test2(){
 const response = await test1();
 console.log("2")
 console.log(response)
 console.log("3")
}
test2();
console.log("4")