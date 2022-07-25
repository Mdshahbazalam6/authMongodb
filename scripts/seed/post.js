const { faker } = require('@faker-js/faker')
const user = require ('../../database/user')
const post = require ('../../database/post')
const connectToDatabase = require ('../../database/index')

async function createUsersPosts ( count ){
    const users = await user.find()
   for(let i=0; i<count; i++){
    await post.create({
     title:faker.hacker.phrase(),
     content:faker.lorem.paragraph(100),
     user:users[Math.floor(Math.random()*53)]
    })
    console.log("user Added")
   }
}

connectToDatabase().then(()=>{
    createUsersPosts(500)
})

// title : String,
// content:String,