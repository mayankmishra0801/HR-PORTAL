const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 8081
const mongoose = require('mongoose');
const connectDb=require('./config/hrDb')
const ChartModel = require('./models/chart')
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

app.get('/chartdata', async(req,res)=>{
    let data = await ChartModel.find();
    res.send({data})
})
app.post('/chartdata', async(req,res)=>{
    // let payload = req.body;
    // console.log(payload)
    // let data = await ChartModel.insertMany(payload);
    // res.send({data:"data inserted"})
    const newuser = new ChartModel({
        colorcode:colorcode,
        year :year,
        amount:amount,
        minBarLength:minBarLength,
   });
   await newuser.save();
})




app.listen(port,()=>{
    console.log("Node server is connected ")
})