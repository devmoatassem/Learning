const { constants } = require("../constants")
const errorHandling = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
            break;
        case constants.UNAUTHORIZED:
            console.log(statusCode)
            res.json({ title: "UNAUTHORIZED", message: err.message, stackTrace: err.stack })
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "VALIDATION_ERROR", message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "FORBIDDEN", message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "SERVER_ERROR", message: err.message, stackTrace: err.stack })
            break;
        default:
            console.log("All GOOD :)")
            break;
    }
}

module.exports = errorHandling;