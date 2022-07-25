const mongoose = require ("mongoose")


const commentSchema = new mongoose.Schema({
content:String,
user:{
    type : mongoose.Types.ObjectId,
    ref : 'user'
},
post :{
 title:String,
 id:mongoose.Types.ObjectId
}
},{
    timestamps:true
}
)

const comment = mongoose.model("comment",commentSchema)

module.exports = comment