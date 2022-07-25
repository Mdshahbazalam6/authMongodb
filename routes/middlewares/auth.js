const SECRET = require("../../constants")
const user = require("../../database/user")

async function auth (req,res,next){
    let token = req.headers.token

if(token){
try {
    const decode_user = jwt.verify(token,SECRET)
    // console.log(decode_user,24)

    let User = await user.findOne({
        email:decode_user.email
    })
//    console.log(user,77)
    if(User){
       req.context.User=User
    }else{
        return res.status(404).send({
            error:"Not found"
        })
    }


} catch (error) {
    return res.status(404).send({
        error:"Invalid Token provided"
    })
}
}
next();

}