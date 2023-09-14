import express from "express"
import morgan from "morgan"
import { userModel } from "./models/index.js"


//Initialization
const app = express()


//Middleware
app.use(express.json())
app.use(morgan("tiny"))

//Session Single Source Of Truth
let session = {username:""}

//Function that returns user having a specific username
function getUser(username){
    return userModel.findOne({username:username})
}

// listening to port 3000
app.listen(3000,()=>{
    console.log("Hey i am the server")
})

//Login API
app.post("/api/login",(req,res) => {
    let User = getUser(req.body.username)
    User.then((user) => {
        console.log(user)
        if(user.password === req.body.password){
         session.username=user.username
         res.send({ok:true,session:session})
        }
    }).catch((err) => res.send({ok:false,error:err}))

})

//Add User API
app.post("/api/addUser",(req,res) => {
    let user = new userModel({username:req.body.username,password:req.body.password,roll_no:1})
    user.save()
    res.send({ok:true})
})

//Navigation Handler API
app.get("/api/auth",(req,res) => {
    if(session.username)
      res.send({ok:true,session:session})
    else{
        res.send({ok:false})
    }
    
      
})

//Logout API
app.get("/api/logout",(req,res) => {
     session={};
     res.send({ok:true})
})