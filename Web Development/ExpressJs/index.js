const express = require("express");
const app = express();

const PORT = 9001;

app.get("/",(req,res)=>{
    res.json({maessage:"HomePage"})
})
app.get("/users",(req,res)=>{
    res.json({maessage:"All users"})
})
app.get("/users/:id",(req,res)=>{
    res.json({maessage:`User added with ID ${req.params.id}`})
    // so I can provide parameters to the URLs like :parmName  and then I can acess them in callback like req.parms.parmName
})
app.post("/users",(req,res)=>{
    res.json({maessage:"User Added"})
})
app.put("/users/:id",(req,res)=>{
    res.json({maessage:`User updated with ID ${req.params.id}`})
})
app.delete("/users/:id",(req,res)=>{
    res.json({maessage:`User deleted with ID ${req.params.id}`})
})

app.listen(PORT,()=>{
    console.log(`Server started on PORT:${PORT}`)
})