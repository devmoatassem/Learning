const express = require("express")
const router = express.Router();
const app = express();
const PORT = 5001;
const path = require("path")
const logger = require("morgan")
const multer = require("multer")

const upload = multer({ dest: "./public/uploads" });

// Built-in middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, "public")))
// Application level middleware

const loggerMiddlewareFunction = (req, res, next) => {
    console.log(`${new Date()} ---- Request: Method=[${req.method}] -- URL=[${req.url}]`)
    next();
}
// so whenever user acess the application this function will get executed
app.use(loggerMiddlewareFunction)


// Third party middleware
app.use(logger("dev")) // log info about requests and responses on terminal




// Router level middleware

app.use(router)

const tempAuth = (req, res, next) => {
    const authStatus = true
    if (authStatus) {
        console.log(`Current Auth status ${authStatus}`)
        next();
    }
    else {
        res.status(401);
        throw new Error("User is not authenticated")
    }

}
const getUsers = (req, res) => {
    res.json({ message: "Get all users" });
}
const addUsers = (req, res) => {
    console.log("Request Body", req.body)
    res.json({ message: "Add new users" });
}

router.use(tempAuth)// inshot it's like decorator function in flask @loginrequired etc
router.route("/").get(getUsers).post(addUsers)

// Error handling middleware

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 401:
            res.json({
                title: "Unauthorized",
                message: err.message,
            })
            break;
        case 404:
            res.json({
                title: "Not Found",
                message: err.message,
            })
            break;
        case 500:
            res.json({
                title: "Internal Server Error",
                message: err.message,
            })
            break;
        default:
            res.json({
                title: "Something unexpected happend",
                message: err.message,
            })
            break;
    }
}

// For file upload
app.post("/upload", upload.single("image"),  (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file)
}, (err, req, res, next) => {
    res.status(400).send({ err: err.message })
})

// For unknown routes
app.all("*", (req, res) => {
    res.status(404);
    throw new Error("Route Not found")
})
app.use(errorHandler)

//////////////////////////////////////////

app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
})