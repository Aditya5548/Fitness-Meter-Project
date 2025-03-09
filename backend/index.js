const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URL)
//mongoose.connect('mongodb://127.0.0.1:27017/muscle')
.then(()=>console.log("Connected Successfully...")
    
    )
    .catch((e)=>console.log(e))


const userRoute=require("./Routes/userRoute")
const AdminRoute = require('./Routes/AdminRoute')
const feedRoute = require('./Routes/feedRoute')
const mRoute=require('./Routes/mroute')
const wcRoute=require('./Routes/Workcalc')

//middleware 
app.use(userRoute)
app.use(AdminRoute)
app.use(feedRoute)
app.use(mRoute)
app.use(wcRoute)


app.listen(process.env.PORT,()=>console.log(`Server Started at port: ${process.env.PORT}`))