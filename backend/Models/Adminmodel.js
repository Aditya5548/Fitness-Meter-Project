const mongoose=require('mongoose')
const AdminSchema=mongoose.Schema({
    name:{String},
    email:{type:String,
        unique:true
    },
    phoneNo:{String,
    },
    dob:{String},
    password:{type:String},
    
})

const usermodel2=mongoose.model('admin',AdminSchema)

module.exports =usermodel2