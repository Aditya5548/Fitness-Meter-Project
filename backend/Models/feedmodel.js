const mongoose=require('mongoose')
const AdminSchema=mongoose.Schema({
    name:{type:String,
    },
    email:{type:String,
        require:true
    },
    type:{type:String},
    message:{type:String},
    Datetime:{type:String}
})

const usermodel3=mongoose.model('feedback',AdminSchema)

module.exports =usermodel3