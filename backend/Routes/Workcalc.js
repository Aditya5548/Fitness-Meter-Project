const express=require('express');
const wcRoute=express.Router();
const Workoutmodel=require('../Models/Workout');

wcRoute.get('/Workoutdata',async(req,res)=>{
    const now = new Date();
    const wdate = now.toLocaleDateString();
    const user=await Workoutmodel.find({wdate}).sort({_id:-1})
    if(user==""){
        return res.send({msg:"Not Data Found",user})
    }
    else{
        return res.send({msg:"Data Found",user})  
    }
    
})

//Daily data

wcRoute.get('/Workoutdata/:id',async(req,res)=>{
    //data calculation start
    const now = new Date();
    const wdate = now.toLocaleDateString();
    //data calculation start 
    const userID=req.params.id
    const user=await Workoutmodel.find({userID,wdate})
    if(user==""){
        return res.send({msg:"Not Data Found",user})
    }
    else{
        return res.send({msg:"Data Found",user})  
    }
    
})



wcRoute.get('/Wcalc/:id/:s',async(req,res)=>{
    const userID=req.params.id
    const wname=req.params.s
    console.log(userID,wname)
    const user=await Workoutmodel.find({userID,wname})
    if(user==""){
        return res.send({msg:"Not Data Found",user})
    }
    else{
        return res.send({msg:"Data Found",user})  
    }
    
})

wcRoute.get('/Wbydate/:id/:s',async(req,res)=>{
    const userID=req.params.id
    const wname=req.params.s
    const now = new Date();
    const wdate = now.toLocaleDateString();
    const user=await Workoutmodel.find({userID,wdate,wname})
    if(user==""){
        return res.send({msg:"Not Data Found",user})
    }
    else{
        return res.send({msg:"Data Found",user})  
    }
    
})

wcRoute.get('/Wmonth/:id/:s',async(req,res)=>{
    //data calculation start

    function getPreviousDate(startDate, daysToSubtract) {
        const initialDate = new Date(startDate);
      
        if (isNaN(initialDate)) {
          return "Invalid date format";
        }
        
        const previousDate = new Date(initialDate);
        previousDate.setDate(initialDate.getDate() - daysToSubtract);
      
        return previousDate.toLocaleDateString();
      }
      
      const today = new Date();
      const daysToSubtract = 30;
      const pastDate = getPreviousDate(today, daysToSubtract);
      
      console.log(`Today's date: ${today.toLocaleDateString()}`);
      console.log(`Date ${daysToSubtract} days ago: ${pastDate}`);
      const wdate=pastDate
    //data calculation start 
    const userID=req.params.id
    const wname=req.params.s
    const user=await Workoutmodel.find({userID,wdate:{$gte:pastDate},wname})
    if(user==""){
        return res.send({msg:"Not Data Found",user})
    }
    else{
        return res.send({msg:"Data Found",user})  
    }
    
})









module.exports=wcRoute;