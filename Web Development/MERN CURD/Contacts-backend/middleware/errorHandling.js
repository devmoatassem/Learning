const constants = require("../constants")
const errorHandling = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: res.message, stackTrace: res.stack })
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", message: res.message, stackTrace: res.stack })
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "VALIDATION_ERROR", message: res.message, stackTrace: res.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "FORBIDDEN", message: res.message, stackTrace: res.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "SERVER_ERROR", message: res.message, stackTrace: res.stack })
            break;
        default:
            break;
    }
}

module.exports = errorHandling;