const comment = require('../database/comment');
const Post = require('../database/post')

let ObjectId = require('mongodb').ObjectId; 



async function getAllPost ( req,res ){
    // const{ skip,limit }=req.query;
    // .skip(skip).limit(limit)
    const posts = await Post.find().populate('user');

    return res.send({
        data : posts
    })
}
function checkPostBelongsToUser(Post, user) {

    if (Post.user.toString() === user._id.toString()) {
        return true
    }

    return false;
}

async function getSinglePost ( req,res ){
    const { id } = req.params;
//    id.trim()
    console.log(id)

    const posts = await Post.find( ObjectId(id.trim()))

   console.log(posts)
    return res.send({
        data:posts
    })
}

async function cratePost ( req,res ) {
    const { postbody } = req.body
  console.log(postbody)
    let a = await Post.create(postbody)
    console.log(a)

    return res.send({
        data:a
    })
}

async function updatePost ( req,res ) {
   const{ id } = req.body;
   const{ post:postData } = req.body;

  let post = await post.find(id)

  for(const[key,value] of Object.entries(post)){
    post[key]=value
  }

  await post.save();

  return res.send({
    data:post
  })
}

async function deletePost ( req,res ){
    const { id }=req.body;

    await post.deleteById(id)

    return res.send({
        message:"Post has been deleted Successfully"
    })
}

module.exports={
    getAllPost,
    getSinglePost,
    cratePost,
    updatePost,
    deletePost,
    
}