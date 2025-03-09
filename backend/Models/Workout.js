const mongoose=require('mongoose')
const WorkoutSchema=mongoose.Schema({
    wname:{type:String},
    duration:{type:String},
    sets:{type:String},
    repl:{type:String},
    wcategory:{type:String},
    cburn:{type:String},
    wtime:{type:String},
    wdate:{type:String,
    },
    userID:{type:String}
})

const userschema5=mongoose.model('Workout',WorkoutSchema)

module.exports =userschema5