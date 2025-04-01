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
    var [otp,setOTP]=useState("")
    var [vcode,setVCODE]=useState("")
    var [disable1, setDISABLE1]=useState("")
    var [disable2, setDISABLE2]=useState("")
    var [disable3, setDISABLE3]=useState("")

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
    let otpver=async (e)=>{
        e.preventDefault()
        var response=await fetch('https://fitness-meter.onrender.com/otpverification',{
            method:'POST',
            body:JSON.stringify({Email}),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        console.log(d)
        if(d.msg=="Please First Enter Email ID"){
            setMsg(d.msg)
        }
        else{
            setVCODE(d.code)
            setMsg(d.msg)
            setDISABLE1("yes")
        }
    }
    let cheak=async(e)=>{
        if(vcode){
            if(vcode==otp){
                setMsg("Verification Successfull")
                setDISABLE2("yes")
                setDISABLE3("no")

            }
            else{
                setMsg("Invalid OTP")
            }
        }
        else{
            setMsg("Register First")
        }
    }
    return(
        <>
        <Navbar/>
        <br /><br />
        <div  className="row my-5 mx-3">
        <div  className="col-sm-6 text-center mx-auto signinbg py-5">
        <form action="">
        <h2 className='fw-bold '>Register Here</h2> 
            <br/>
            <span className='text-danger'><h4>{msg}</h4></span>
                <input type="name" value={Name} onChange={(e)=>{setName(e.target.value)}}   placeholder='Enter Name' className='w-75 text-start shadow-lg workoutname'/>
                <br /><br />  
                <div className="input-group w-75 text-start mx-auto shadow-lg">
                <input type="email" id="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email' className='form-control sendotp' disabled={disable1==="yes"}/>
                    <div className="input-group-append">
                        <button className='input-group-text sendotp' onClick={otpver} disabled={disable1==="yes"}>Send OTP</button>
                    </div>
                </div>
                <br />
                <div className="input-group w-75 text-start mx-auto shadow-lg">
                <input type="text"  value={otp} onChange={(e)=>{setOTP(e.target.value)}}  placeholder='Enter OTP' className='form-control sendotp' disabled={disable2==="yes"}/>
                    <div className="input-group-append">
                        <button className='input-group-text sendotp' onClick={cheak} disabled={disable2==="yes"}>Verify</button>
                    </div>
                </div><br />
                <input type="number" id="number" value={Number} onChange={(e)=>{setNumber(e.target.value)}} placeholder='Enter Number' className='w-75 text-start shadow-lg workoutname'/>
                <br /><br />
                <input type="date" id="date" value={Dob} onChange={(e)=>{setDob(e.target.value)}} placeholder="dob" className='w-75 text-start shadow-lg workoutname'/>
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
                <input type="password" id="pass"   value={Password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Create Passward' className='w-75 text-start shadow-lg workoutname'/>
                <br/>
                
                <br/>
            <button className='btn btn-dark btnview' onClick={regcode} disabled={disable3===""}>Summit</button>
        </form>
        </div>
        </div>
         </>
    )
}
export default Signup