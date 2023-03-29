const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
   email:{
    type:String,
    required:true,
    unique:true,
    },
   password:{
    type:String,
    required:true,
    minlength:8, 
    },
   company:{
    type:String,
    required:true,
    trim:true
     },
   created_at: { type: Date, required: true, default: Date.now },
   updated_at: { type: Date, required: true, default: Date.now },



})

module.exports= mongoose.model('first',userSchema)


