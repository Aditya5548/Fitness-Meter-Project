const mongoose=require('mongoose')
const WorkoutSchema=mongoose.Schema({
    uid:{type:String},
    name:{type:String},
    email:{type:String},
    topic:{type:String},
    message:{type:String},
})

const userschema5=mongoose.model('Contact',WorkoutSchema)

module.exports =userschema5