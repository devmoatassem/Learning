const cryptoId = require("crypto")
const requestBodyParser = require("../utils/bodyparser")
const writeTo = require("../utils/write-to-file")

module.exports = (async (req, res) => {
    if (req.url === "/api/users") {
        try {
            let body = await requestBodyParser(req);
            body.id = crypto.randomUUID();
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