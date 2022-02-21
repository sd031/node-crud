const express =require("express");
const app =express();
const bodyParser= require("body-parser");

app.use(bodyParser.json());

//database connection
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/userTestDB',{useNewUrlParser: true,useUnifiedTopology:true});
const db=mongoose.connection;

db.on("error",(err)=>{

    console.log("error enconterd while connecting to database");
    console.log(err.meesage)
});

db.once("open",()=>{
    console.log("Connected to database....!!!");
});

// Server 
app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
});

//use routers
app.get("/_status",function(req,res){
    return res.status(200).json({"status" : "ok"});
    });

app.get("/",function(req,res){
return res.status(200).json({});
});
app.use("/users",require('./app/routers/userRouter'));
