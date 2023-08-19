const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/LoginSignUp")
.then(()=>{
    console.log('Mongodb Connected')
})
.catch(()=>{
    console.log("Failed to connected")
})

const LoginSchema = new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
})

const collection=new mongoose.model('Collection1',LoginSchema)

module.exports=collection