const express =require("express");
const app =express();
const bodyParser= require("body-parser");

app.use(bodyParser.json());

//database connection
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:777/userTestDB',{useNewUrlParser: true,useUnifiedTopology:true});
const db=mongoose.connection;

db.on("error",(err)=>{

    console.log("error enconterd while connecting to database");
    console.log(err.meesage)
});

db.once("open",()=>{
    console.log("Connected to database....!!!");
});

// Server 
const port = process.env.NODE_PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
});

//use routers
app.get("/_status",function(req,res){
    return res.status(200).json({"status" : "Hi"});
    });

app.get("/",function(req,res){
return res.status(200).json({ status: "updated"});
});
app.use("/users",require('./app/routers/userRouter'));
