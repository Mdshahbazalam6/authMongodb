const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({
name:String,
email:String,
image:String,
password:{
    type:String,
    select:false
}
},{
    timestamps:true
})

const user = mongoose.model("user",userSchema)

module.exports = user