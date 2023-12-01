const http = require("http")
require("dotenv").config();
const getdata = require("./functions/get-req")
const postdata = require("./functions/post-req")
const deletedata = require("./functions/delete-req")
const putdata = require("./functions/put-req")

let users = require("./data/user.json")

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
    req.users = users;
    switch (req.method) {
        // Add data to given file
        case "POST":
            postdata(req,res);
            break;
        // Get all data from the file, or also data of specific userID
        case "GET":
            getdata(req,res);
            break;
        // 
        case "PUT":
            break;
        
        case "DELETE":
            deletedata(req,res);
            break
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title: "404 error" , message: "Can't find the route"}))
            res.end();
    }

})

server.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
})



