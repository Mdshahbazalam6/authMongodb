const user = require('../database/user')
const jwt = require("jsonwebtoken")
const SECRET = require("../constants/index")



async function registerUser ( req,res ) {
    let { userbody } = req.body
console.log(userbody)
    let existingUser = await user.findOne({
        email:userbody.email
    })
    console.log(existingUser)
    if(existingUser){
        return res.status(500).send({
            message:"Bad Request User already exists"
        })
    }
    let userDoc = await user.create(userbody)
    return res.send({
        data : userDoc
    })
}
async function getAllUsers ( req,res){
let users = await user.find()

return res.send({
    data:users
})
}

async function loginUser ( req,res ){
    let { userbody }  =  req.body
    let { email,password } = userbody 
    let existingUser = await user.findOne({
        email:email
    },{
        password: 1,
        _id: 1,
        email: 1,
        name: 1,
    })

    if(existingUser){
        if(existingUser.password == password){
        let encrypted_Token = jwt.sign({
            id:existingUser._id,
            email:existingUser.email,
            name:existingUser.name
        },SECRET)
        return res.send({
            data:{
                token:encrypted_Token
            }
        })
        }else{
            error:"Password Does not match"
        }

       
    }else{
        return res.status(404).send({
            error:"User was not found "
        })
    }
}

async function getLoggedInUsers ( req,res,next ){
let token = req.headers.token

if(token){
try {
    const decode_user = jwt.verify(token,SECRET)
    console.log(decode_user,24)

    let User = await user.findOne({
        email:decode_user.email
    })
   console.log(user,77)
    if(User){
        return res.send({
            data:User
        })
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
}else{
    return res.status(400).send({
        error:"Token was not provided"
    })
}
}

module.exports = {
    registerUser,
    getAllUsers,
    loginUser,
    getLoggedInUsers
};