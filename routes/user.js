const express = require('express');
const { getAllUsers, registerUser,loginUser,getLoggedInUsers } = require('../handlers/user');
const auth = require("./middlewares/auth")
const userRouter = express.Router();


userRouter.get('/users',getAllUsers)
userRouter.post('/users',registerUser)
userRouter.post('/users/login',loginUser)
userRouter.get('/users/getLoggedinuser',getLoggedInUsers)

module.exports = userRouter