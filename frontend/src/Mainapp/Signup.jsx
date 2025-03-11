import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Elements/Navbar'
function Signup(){
    const navigate=useNavigate()
    let [Name , setName]=useState("")
    let [Number, setNumber]=useState("")
    let [Email , setEmail]=useState("")
    let [Password , setPassword]=useState("")
    let [msg , setMsg]=useState("")
    var [Dob,setDob]=useState("")
    var [Gender,setGender]=useState("")
    var [Country,setCounty]=useState("")

    let regcode=async (e)=>{
        e.preventDefault()
        const user={Name,Number,Email,Password,Dob,Gender,Country}
        console.log(user)
        var response=await fetch('https://fitness-meter.onrender.com/user',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        console.log(d)
        if(d.msg){
            setMsg(d.msg)
            window.alert(d.msg)
            setName("")
            setNumber("")
            setEmail("")
            setPassword("")
            setCounty("")
            setGender("")
            setDob("")
            //navigate("/Signin")
        }
        else{
            window.alert(d.msg)
            setName("")
            setNumber("")
            setEmail("")
            setPassword("")
            setCounty("")
            setGender("")
            setDob("")
        }
    }
    return(
        <>
        <Navbar/>
        <br /><br />
        <div  className="row my-5 mx-5">
            <div  className="col-sm-6 text-center mx-auto signinbg py-5">
        <form action="" onSubmit={regcode} >
        <h2 className='fw-bold '>Register Here</h2> 
            <br/>
            <span className='text-danger'><h4>{msg}</h4></span>

                <input type="name" value={Name} onChange={(e)=>{setName(e.target.value)}}   placeholder='Enter Name' className='w-75 text-start shadow-lg workoutname'/>
                <br /><br />
                <input type="email" id="email"  value={Email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email' className='w-75 text-start shadow-lg workoutname'/>
                <br /><br />
                <input type="number" id="number"  value={Number} onChange={(e)=>{setNumber(e.target.value)}}  placeholder='Enter Number' className='w-75 text-start shadow-lg workoutname'/>
                <br /><br />
                <input type="date" id="date" value={Dob} onChange={(e)=>{setDob(e.target.value)}} className='w-75 text-start shadow-lg workoutname'/>
                <br /><br/>
                <select name="" id="gender"  value={Gender} onChange={(e)=>{setGender(e.target.value)}} className='w-75 text-start shadow-lg workoutname'>
                    <option value="">Select Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            <br /><br />
                <select name="" value={Country} onChange={(e)=>{setCounty(e.target.value)}} className='w-75 text-start shadow-lg workoutname'>
                    <option value="">Country</option>
                    <option value="india">india</option>
                    <option value="aamerica">america</option>
                    <option value="pakistan">pakistan</option>
                    <option value="bangladesh">bangladesh</option>
                </select>
                <br /><br />
                <input type="password" id="pass"   value={Password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='enter Passward' className='w-75 text-start shadow-lg workoutname'/>
                <br/>
                <br/>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Yes, I am to receive latest news on email </label>
            <br />
            <br/>
            <input type="submit" value="Register" className='btnview'/>
        </form>
        </div>
        </div>
         </>
    )
}
export default Signup