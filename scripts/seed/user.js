const { faker } = require('@faker-js/faker')
const user = require ('../../database/user')
const connectToDatabase = require ('../../database/index')

async function createUsersData ( count ){
   for(let i=0; i<count; i++){
    await user.create({
      name: faker.name.firstName() +' '+faker.name.lastName(),
      email:faker.internet.email(),
      image:faker.internet.avatar(),
      password:faker.internet.password()
    })
    console.log("user Added")
   }
}

connectToDatabase().then(()=>{
    createUsersData(50)
})

// name:String,
// email:String,
// image:String,
// password:{
//     type:String,
//     select:false
// }