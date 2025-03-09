const express=require('express');
const feedRoute=express.Router();
const feedModel=require('../Models/feedmodel');


var cors=require('cors');
feedRoute.use(cors())

feedRoute.get('/Feedback',async(req,res)=>{
    const user=await feedModel.find().sort({_id:-1})
    return res.send(user);
});

feedRoute.post('/feed',async(req,res)=>{
    const body=req.body
    console.log(body)
    try{
        if(!body ||!body.Name ||!body.Email || !body.message)
            {res.status(400).json({"msg":"All field required"})}


            else{
                var d=Date.now()
                var starting=new Date()
                console.log(starting)
                const result =await feedModel.create({
                    Datetime:starting,
                    name:body.Name,
                    email:body.Email,
                    message:body.me,
                    type:body.type,         
                })
                return res.status(200).json({"msg":"Success"})
            }
    }
    catch(e){
        console.log("Error",e.errmsg)
        res.json({'msg':e.errmsg})
    }
})


module.exports=feedRoute;