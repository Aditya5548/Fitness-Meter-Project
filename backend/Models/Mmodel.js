const mongoose=require('mongoose')
const MSchema=mongoose.Schema({
    Number:{type:String,
    },
    Email:{type:String,
        unique:true
    },
    age:{type:Number},
    Weight:{type:Number},
    Gender:{type:String},
    mtype:{type:String},
    tid:{type:String},
    Status:{type:String,
        require:true
    },
    Pstatus:{type:String,
        require:true
    },
    start:{type:String},
    end:{type:String}
})

const Mmodel=mongoose.model('mrecord',MSchema)

module.exports =Mmodel