const mongoose = require ("mongoose")
const user = require("./user")

const postSchema = new mongoose.Schema({
title : String,
content:String,
user:{
    type:mongoose.Types.ObjectId,
    ref:user
}
},{
    timestamps:true
})

const post = mongoose.model("post",postSchema)

module.exports = post