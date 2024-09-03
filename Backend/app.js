require("dotenv").config();
const express = require("express");
const connection = require("./config/db");
const port = 9999;
const app = express();
const cors = require("cors")


app.use(cors());
app.use(express.json());

app.use("/auth",require("./routes/authRoute"));


app.listen(port,()=>{
    console.log("Server Started At -",port);
    connection()
})