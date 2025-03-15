


const mongoose=require("mongoose");

require("dotenv").config();



const dbConnect= async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database is connected");
    }catch(e){
        console.log("Database is not connected");
        console.log(e.message);
        process.exit(1);
    }
}

module.exports=dbConnect;