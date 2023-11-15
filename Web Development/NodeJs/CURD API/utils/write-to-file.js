const fs = require("fs")
const path = require("path")
module.exports= (data)=>{
    try{
        fs.writeFileSync("../data/user.json",JSON.stringify(data),"utf-8")
    }
    catch(err){
        console.log(err)
    }   
}