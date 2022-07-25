const express = require("express");
const cors = require ("cors")
const connectToDatabase = require('./database/index');
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");



const app = express()
app.use(express.json())
app.use(cors())
// app.use(setReqContext)
// app.use(logger)

function logger (res,req,next){
    console.log("Applied logger Middleware")
      next()
  }
 
app.get('/',(req,res)=>{
    console.log("request resolved")

    return res.send({
        message:"request resolved"
    })
})
app.use(postRouter)
app.use(userRouter)



 
function setReqContext (req,res,next){
    req.context = {
    }
    next();
}


connectToDatabase().then(()=>{

    app.listen(3000,()=>{
        console.log("Server is running in 3002 port")
    })
})