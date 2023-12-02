const requestBodyParser = require("../utils/bodyparser")
const writeTo = require("../utils/write-to-file")

module.exports = (async (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // so here lastIndex tell me at what index of my url I have a "/" in my URL and then we pass that to sub string method that slice string from that position
    let id = req.url.split("/")[3]
    // it gives me array all values with entries seperated by "/"
    const regex4 = new RegExp(/^[0-9a-fA-F]{24}$/)


    const index = req.users.findIndex((user) => {
        return user.id === id;
    })

    // console.log(req.users,idp,a)

    if (!regex4.test(id)) {
        // res.statusCode = 400;
        res.writeHead(400, { "Content-Type": "application/json" });
        // res.write(JSON.stringify({header : "Bad Request", message:"Can't find the movie :("}))
        res.end(JSON.stringify({ header: "Bad ID Request", message: "Can't find the movie :(" }));
    } else if (regex4.test(id) && baseURL === "/api/users/") {
        try {
            
            // it takes input from client and then return as object
            let body = await requestBodyParser(req);
            if (index === -1) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ header: "Bad ID Request", message: "Can't find the movie :(" }));
            }
            else {
          
                // here I am going to get required movie object from whole list in req.users then add id and overwrite remaing body elements
                req.users[index] = { id, ...body }
                writeTo(req.users)
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify(req.users[index]));
               
            }
        }
        catch (err) {
            console.log(err);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ title: "Validation failed", message: "Request Body is not found" }));
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ header: "Bad Request", message: "Can't find the url :(" }));
    }
}) 