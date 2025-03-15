

const express=require("express");
const dbConnect = require("./config/databaseConnect");
const userRouter1=require("./router/userRouter");
require("dotenv").config();
const port=process.env.PORT;
const cors=require("cors");
const app=express();


app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow cookies if needed
}));


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/api",userRouter1);




app.get("/",(req,res)=>{
    res.send("Hello Word");
})


app.listen(port, async ()=>{
    console.log(`Server is running successfully at http://localhost:${port}`);
    await dbConnect();
})