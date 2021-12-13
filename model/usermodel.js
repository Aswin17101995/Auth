
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requird:true
    },
    gender:{
        type:String,
        required:true
    }

}) 

const Users = mongoose.model("User",UserSchema)

module.exports = Users