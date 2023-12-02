const requestBodyParser = require("../utils/bodyparser")
const writeTo = require("../utils/write-to-file")

module.exports = (async (req, res) => {
    
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // so here lastIndex tell me at what index of my url I have a "/" in my URL and then we pass that to sub string method that slice string from that position
    let id = req.url.split("/")[3]
    // it gives me array all values with entries seperated by "/"
    const regex4 = new RegExp(/^[0-9a-fA-F]{24}$/)

    function movieFilter(idp){
        
        const a = req.users.filter((user)=>{
            return user._id===idp;
        })
        if (a.length>0){
            return a;
        }
        else{
            return false;
        }
        
        // console.log(req.users,idp,a)
    }
    
    if (req.url === "/api/users") {
        try {
            let body = await requestBodyParser(req);
            body._id = crypto.randomUUID();
            req.users.push(body);
            writeTo(req.users)
            res.writeHead(201, { "Content-Type": "application/json" })
            res.end();

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