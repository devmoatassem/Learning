const express = require("express");
const errorHandling = require("./middleware/errorHandling");
const connectionDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectionDB();// Database Connection
const app = express();

const port = process.env.PORT || 5001;


app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/user",require("./routes/userRoutes"));


app.use(errorHandling);
app.listen(port,()=>{
    console.log("Server Listening on port = ",port);
})