const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 8081
const mongoose = require('mongoose');
const connectDb=require('./config/hrDb')

//for connected mongodb
const MONGO_URI=process.env.MONGO_URI
connectDb(MONGO_URI)






// mongoose.connect = ('mongodb://localhost:27017/mywork')

// .then(()=>{
//     console.log("Database is connected!");

// })
// .catch(()=>{
//    console.log("DB is not connected ")
// });

app.listen(port,()=>{
    console.log("Node server is connected ")
})