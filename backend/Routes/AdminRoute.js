const express=require('express');
const AdminRoute=express.Router();
const userModel2=require('../Models/Adminmodel');
const contact=require('../Models/Contact')
var cors=require('cors');

AdminRoute.use(cors())
AdminRoute.get('/alluser',async(req,res)=>{
    const user=await userModel2.find();
    return res.send(user);
});


// get only specific data
AdminRoute.get('/aduser/:id',async(req,res)=>{
    try{var id=req.params.id
        const result=await userModel2.findById(id)
        return res.send(result)
    }
    catch(e){
        res.json({'msg':e.errmsg})
    }
 })



AdminRoute.use(express.urlencoded({extended:false}))
AdminRoute.use(express.json())

AdminRoute.post('/Admin',async(req,res)=>{
    const body=req.body
    try{
        if(!body)
            {res.status(400).json({"msg":"All field required"})}
            else{
                const result =await userModel2.create(body)
                return res.status(200).json({"msg":"Success"})
            }
    }
    catch(e){
        res.json({'msg':e.errmsg})
    }
})

AdminRoute.post('/Adminlog',async(req,res)=>{
    const {email ,password}=req.body
    try{
        const result =await userModel2.findOne({email})
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
        res.json({'msg':e.errmsg})
    }
})


AdminRoute.get('/contactdata',async(req,res)=>{
    try{
        const result=await contact.find().sort({_id:-1})
        return res.send(result)
    }
    catch(e){
        res.json({'msg':e.errmsg})
    }})

module.exports=AdminRoute;