const express=require('express');
const mRoute=express.Router();
const mmodel=require('../Models/Mmodel');
const usermodel=require('../Models/userModel')
var cors=require('cors');

mRoute.use(cors())
mRoute.use(express.urlencoded({extended:false}))
mRoute.use(express.json())

//memberverification
mRoute.get('/mport/:id',async(req,res)=>{
    const id=req.params.id
    const result=await usermodel.findById(id)
    const Email=result.email
    const result2= await mmodel.findOne({Email})

    if(result==null){
        
        return res.send({msg:"user not taken membership"})     
    }
    else{
        res.json({'msg':"user found",res:result2})
    }
 })

mRoute.post('/mport',async(req,res)=>{
    const body=req.body
    try{
        if(!body || !body.Number || body.Email || body.age || body.Weight || body.Gender || body.mtype || body.tid)
            {res.status(400).json({"msg":"All field required"})}
        else{
            if(body.mtype=='3'){
                var s="Bronze"
            }
            else if(body.mtype=='6'){
                var s="Silver"
            }
            else if(body.mtype=='12'){
                var s="Gold"
            }

            function getPreviousDate(startDate, daysToSubtract) {
                   const initialDate = new Date(startDate);
                   if (isNaN(initialDate)) {
                   return "Invalid date format";
               }
        
            const previousDate = new Date(initialDate);
            previousDate.setDate(initialDate.getDate() + daysToSubtract);
            return previousDate.toLocaleDateString();
             }
      
            const today = new Date();
            const daysToSubtract = (Number(body.mtype)*30);
            const pastDate = getPreviousDate(today, daysToSubtract);


                const result =await mmodel.create({
                    Email:body.Email,
                    Number:body.Number,
                    age:body.age,
                    Weight:body.weight,
                    Gender:body.Gender,
                    mtype:s,
                    tid:body.tid,
                    Status:"p",
                    Pstatus:"N",
                    start:today,
                    end:pastDate
                    
                })
                return res.status(200).json({"msg":"Membership Registration will be Update 3-4 Hour"})
            }
    }
    catch(e){
        res.json({'msg':e.errmsg})
    }
})


mRoute.get('/Membershipdata',async(req,res)=>{
    const user=await mmodel.find().sort({start:-1})
    if(user==""){
        return res.send({msg:"Not Data Found",user})
    }
    else{
        return res.send({msg:"Data Found",user}) 
    }
    
})


mRoute.patch('/Membershipdata/:id/:s',async(req,res)=>{
    const id=req.params.id
    const s=req.params.s
    try{
       const result =await mmodel.findByIdAndUpdate(id,{Pstatus:s})

        return res.status(200).json({"msg":"updated"})
        }

    catch(e){
        res.json({'msg':e.errmsg})
    }
})



module.exports=mRoute;