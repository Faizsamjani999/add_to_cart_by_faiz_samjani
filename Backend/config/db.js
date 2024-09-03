const mongoose = require("mongoose");


const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected...");
    
}

module.exports = connection