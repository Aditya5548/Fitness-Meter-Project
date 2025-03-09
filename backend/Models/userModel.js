const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String,
    },
    email:{type:String,
        unique:true
    },
    number:{type:Number},
    dob:{type:Date},
    gender:{type:String},
    country:{type:String},
    password:{type:String}
})

const usermodel=mongoose.model('user',userSchema)

module.exports =usermodel