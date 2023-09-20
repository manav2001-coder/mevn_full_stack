import mongoose from 'mongoose'
import mongooseEncryption from 'mongoose-encryption'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect("mongodb://localhost:27017/demo")

//Schemas
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    email:String,
    phone:Number,
})

userSchema.plugin(mongooseEncryption,{secret:process.env.SECRET,encryptedFields:["password"]})


//Models
const userModel = new mongoose.model("user",userSchema)


export{ userModel }