const http = require("http")
require("dotenv").config();


const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
    switch (req.method) {
        case "POST":
            break;
        case "GET":
            break;
        case "PUT":
            break;
        case "DELETE":
            break
        default:
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title: "404 error" , message: "Can't find the route"}))
            res.end();
    }

})

server.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
})



