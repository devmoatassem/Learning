module.exports = (req, res) => {
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
    
    // console.log(baseURL, req.url, id)

    if (req.url === "/api/users") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.users))
        res.end();
    }
    else if (!regex4.test(id)) {
        // res.statusCode = 400;
        res.writeHead(400, { "Content-Type": "application/json" });
        // res.write(JSON.stringify({header : "Bad Request", message:"Can't find the movie :("}))
        res.end(JSON.stringify({ header: "Bad ID Request", message: "Can't find the movie :(" }));
    }
    else if (regex4.test(id) && baseURL === "/api/users/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(movieFilter(id)? movieFilter(id):{ header: "ID not Found", message: "Can't find the movie :(" }))
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ header: "Bad Request", message: "Can't find the url :(" }));
    }
}


