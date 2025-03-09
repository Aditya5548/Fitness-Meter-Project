const express=require('express');
const userRoute=express.Router();
const userModel=require('../Models/userModel');
const Workoutmodel=require('../Models/Workout');
const contact=require('../Models/Contact')
var cors=require('cors');
const { main } = require('../helper');
userRoute.use(cors())

userRoute.get('/user',async(req,res)=>{
    try{
        const result=await userModel.find().sort({_id:-1})
        return res.send(result)
    }
    catch(e){
        console.log("error",e.errmsg)
        res.json({'msg':e.errmsg})
    }})

// get only specific data
userRoute.get('/user/:id',async(req,res)=>{
    try{var id=req.params.id
        const result=await userModel.findById(id)
        return res.send(result)
    }
    catch(e){
        console.log("error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
 })



    
userRoute.use(express.urlencoded({extended:false}))
userRoute.use(express.json())
userRoute.post('/user',async(req,res)=>{
    const body=req.body
    console.log(body)
    try{
        if(!body ||!body.Name || !body.Number || !body.Email || !body.Password)
            {res.status(400).json({"msg":"All field required"})}
            else{
                const result =await userModel.create({
                    name:body.Name,
                    number:body.Number,
                    email:body.Email,
                    password:body.Password,
                    gender:body.Gender,
                    country:body.Country,
                    dob:body.Dob
                })
                var sub=`hi,<b>${body.Name}</b><br/> Thank you for the registration our Fitness-meter
                <br/><h3><b>USER ID:</b> ${body.Email}<h3/><br/><h3><b> Password:</b><span style="color: red;"> ${body.Password}</h3> <span/><br/><h1>👌<h1/>
                `
                //sending Verification mail
                main(body.Email,"Registration on Fitness-Meter",sub)
                //received to user before msg==success
                return res.status(200).json({"msg":"Success"})
                
                
            }
    }
    catch(e){
        console.log("Error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
})


userRoute.post('/userlog',async(req,res)=>{
    const {email ,password}=req.body
    console.log(email,password)
    try{
        const result =await userModel.findOne({email})
        console.log(result)
        if(result){
            if(result.password==password)
                {res.json({msg:"Login Success..",id:result._id,name:result.name})}
            else{
                return res.send({msg:"Incorrect password"})
            }
            
        }
        else{
            return res.send({msg:"User Not found"})
        }
    }
    catch(e){
        console.log("Error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
})

userRoute.get('/user/:id',async(req,res)=>{
    const userID=req.params.id
    const user=await userModel.find({userID})
        return res.send({msg:"Data Found",user})     
})

userRoute.patch('/user/:id',async(req,res)=>{
    const id=req.params.id
    const body=req.body
    console.log(body)
    console.log(id)
    try{if(!body ||!body.Name || !body.Number || !body.Email || !body.Password || !body.Gender|| !body.Password || !body.Country )
               {res.status(400).json({"msg":"All field required"})}
        else{const result =await userModel.findByIdAndUpdate(id,{
             name:body.Name,
            number:body.Number,
            email:body.Email,
            gender:body.Gender,
            password:body.Password,
            country:body.Country,
            dob:body.Dob
          })
        return res.status(200).json({"msg":"updated Successfully..."})
        }}
    catch(e){
        console.log("Error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
})


userRoute.delete('/deleteuser', async(req,res)=>{
    try{
        const {id}=req.body
        const result=await userModel.findByIdAndDelete(id);
        return res.send({msg:"Deleted Successfully...."})
    }
    catch(e){
        return res.send({msg:e})
    }
})





userRoute.post('/wroute',async(req,res)=>{
    const body=req.body
    console.log(body)
    try{
        if(!body || !body.uid || !body.duration || !body.sets || !body.repl || !body.sets || !body.wcategory || !body.cburn)
            {res.status(400).json({"msg":"All field required"})}
            else{
                const now = new Date();
                const date = now.toLocaleDateString();
                const time = now.toLocaleTimeString();
                const result =await Workoutmodel.create({
                    userID:body.uid,
                    wdate:date,
                    wtime:time,
                    wname:body.wname,
                    duration:body.duration,
                    sets:body.sets,
                    repl:body.repl,
                    wcategory:body.wcategory,
                    cburn:body.cburn           
                })
                return res.status(200).json({"msg":"Success"})
            }
    }
    catch(e){
        console.log("Error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
})


userRoute.post('/contact',async(req,res)=>{
    const body=req.body
    console.log(body)
    try{
        if(!body || !body.name || !body.email || !body.topic || !body.message)
            {res.status(400).json({"msg":"All field required"})}
            else{
                const result =await contact.create(body)
                console.log(body.email)
                var sub=`hi,<b>${body.name}</b><br/> Thank you for Contacting Us <br/> We Will Respond Soon For Your Message.
                <br/>
                <b>Topic: </b>${body.topic}
                <br/>
                <b>Message: <b/>${body.message}
                `
                //sending Verification mail
                main(body.email,"MusleMeter Contact",sub)
                //received to user before msg==success
                return res.status(200).json({"msg":"Success"})

            }
    }
    catch(e){
        console.log("Error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
})

module.exports=userRoute;