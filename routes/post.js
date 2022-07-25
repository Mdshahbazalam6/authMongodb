const express = require('express');
const {
    getAllPost,
    getSinglePost,
    cratePost,
    updatePost,
    deletePost
}  = require('../handlers/post')
const auth = require('./middlewares/auth');


const postRouter = express.Router();

postRouter.get('/posts',getAllPost)
postRouter.get('/posts/:id',getSinglePost)
postRouter.post('/posts',cratePost)
postRouter.patch('/posts/:id',updatePost)
postRouter.delete('/posts/:id',deletePost)

module.exports = postRouter