const writeTo = require("../utils/write-to-file")
module.exports = (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // so here lastIndex tell me at what index of my url I have a "/" in my URL and then we pass that to sub string method that slice string from that position
    let id = req.url.split("/")[3]
    // it gives me array all values with entries seperated by "/"
    const regex4 = new RegExp(/^[0-9a-fA-F]{24}$/)

    function deleteMovie(index){
        req.users.splice(index,1)
        writeTo(req.users)
        return true;
    }
    function movieFilter(idp){

        const index = req.users.findIndex((user) => {
            return user._id===idp;
        })
        if (index===-1){
            return false;
        }
        else{
            return deleteMovie(index);
        }
        
        // console.log(req.users,idp,a)
    }
    
    
    // console.log(baseURL, req.url, id)

    if (!regex4.test(id)) {
        // res.statusCode = 400;
        res.writeHead(400, { "Content-Type": "application/json" });
        // res.write(JSON.stringify({header : "Bad Request", message:"Can't find the movie :("}))
        res.end(JSON.stringify({ header: "Bad ID Request", message: "Can't find the movie :(" }));
    }
    else if (regex4.test(id) && baseURL === "/api/users/") {
        res.statusCode = 204;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(movieFilter(id)? req.users:{ header: "ID not Found", message: "Can't find the movie :(" }))
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ header: "Bad Request", message: "Can't find the url :(" }));
    }
}


