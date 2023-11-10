// One way to use environment variables
// instal 
// npm i dotenv
// create .env file with variables

// require("dotenv").config();
console.log(process.env.NAME)
console.clear()
// //////////////////////////////////////////////
// 2nd way to acess environment variables if you don't use require
// use this command 
// node -r dotenv/config .\env.js

console.log(process.env.PROFESSION)