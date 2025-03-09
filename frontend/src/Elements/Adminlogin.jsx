import React, { useEffect, useState } from 'react';
import Navbar from '../Elements/Navbar';
import { useNavigate } from 'react-router-dom'
function Adminlogin(){
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    let [msg , setMsg]=useState("")
    const navigate=useNavigate()
           //validation start
           const validate =()=>{
            if(!localStorage.getItem('Admin')){
                navigate('/Adminlogin')
            }
            else{
                navigate('/Addash')
            }
        }
        //calling validation
        useEffect(()=>{
            validate()
        },[])
    
        //validation end


    const logcode =async(e)=>{
        e.preventDefault()
        const user={email,password}
        console.log(user)
        var response=await fetch('http://localhost:4000/Adminlog',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        console.log(d)
        if(d.msg=="Login Success.."){
            setMsg("Login Successs")
            setEmail("")
            setPassword("")
            localStorage.setItem('Admin',d.id)
            localStorage.setItem('adminname',d.name)
            navigate("/Addash")   
        }
        else{
            setMsg(d.msg)
            setEmail("")
            setPassword("")
         }
    }
    
    return (
        <>
        <Navbar />
        <br /><br />
        <div className="row my-5 ">
            <div className="col-sm-7 col-md-4 text-center mx-auto signinbg py-5">
               <h2 className='fw-bold '>Admin Login</h2>         
               <form action=""  onSubmit={logcode} >
               <span className='text-danger'><h4>{msg}</h4></span>
               <br /><br />  
                <input type="email" id="name" placeholder='Enter Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}className='w-75 text-start workoutname'/>
                <br /><br />
                <input type="password" id="pass"  placeholder='enter Passward' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-75 workoutname'/>
                <br/><br/>
                <input type="submit" value="Login" className='btnview'/>
                </form>

            </div>
        </div>
        </>
    );
}

export default Adminlogin;
