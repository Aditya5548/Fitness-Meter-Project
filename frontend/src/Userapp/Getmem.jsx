import React, { useState } from 'react'
import SidebarUser from '../Elements/SidebarUser';
import { useNavigate } from 'react-router-dom'
import qr from '../assets/payment.jpg'
function Getmem(){
    const navigate=useNavigate()
    let [msg , setMsg]=useState("")
    let [amt , setAmt]=useState(3000)
    let [Number, setNumber]=useState("")
    let [Email , setEmail]=useState("")
    var [age,setAge]=useState("")
    var [Gender,setGender]=useState("")
    var [mtype,setMtype]=useState(3)
    var [tid,setTid]=useState("")
    var [Weight, setWeight]=useState("")


    let regcode=async (e)=>{
        e.preventDefault()
        const user={amt,Number,Email,age,Weight,Gender,mtype,tid}
        console.log(user)
        
        var response=await fetch(`${import.meta.env.VITE_URL}/mport`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        console.log(d)
        if(d.msg=="Membership Registration will be Update 3-4 Hour"){
            window.alert("Membership Registration Success")
            setMsg(d.msg)
            setAmt("")
            setNumber("")
            setEmail("")
            setAge("")
            setGender("")
            setMtype("")
            setTid("")
            setWeight("")
            
            
            //navigate("/Signin")
        }
        else{
            setMsg(d.msg)
            window.alert(d.msg)
            setAmt("")
            setNumber("")
            setEmail("")
            setAge("")
            setGender("")
            setMtype("")
            setTid("")
            setWeight("")
        }

    }

    return(
        <>
        <SidebarUser />
     <div className="adminlogout">
        <div>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
          <button className="btnset2" onClick={()=>{localStorage.removeItem('user') ,localStorage.removeItem('username') ,navigate('/Signin')}}>Logout</button>
        </div>
     </div>
        <div  className="row  mx-1">
        <div  className="col-sm-6 text-center mx-auto py-4">
        <form action="" onSubmit={regcode} >
            <h2 className='fw-bold '>Get Membership</h2> 
    
            <span className='text-danger'><h4>{msg}</h4></span>
               <br />
                <input type="email" id="email"  value={Email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email'  className='w-75 text-start shadow-lg workoutname'/>
                <br />
                <input type="number" id="number"  value={Number} onChange={(e)=>{setNumber(e.target.value)}}  placeholder='Enter Number'  className='w-75 text-start shadow-lg workoutname'/>
                <br />
                <input type="number" placeholder="Enter Age"value={age} onChange={(e)=>{setAge(e.target.value)}} className='w-75 text-start shadow-lg workoutname'/>
                <br />
                <input type="number" placeholder="Enter Weight" value={Weight} onChange={(e)=>{setWeight(e.target.value)}} className='w-75 text-start shadow-lg workoutname'/>
                <br />
                <select value={Gender} onChange={(e)=>{setGender(e.target.value)}}   className='w-75 text-start shadow-lg workoutname'>
                    <option value="">Select Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            <br />
                Membership Type:
                <br />
                <select value={mtype} onChange={(e)=>{setMtype(e.target.value);(e.target.value==3?setAmt(3000):e.target.value==6?setAmt(6000):(e.target.value==12?setAmt(10000):setAmt(0))) }}  className='w-75 text-start shadow-lg workoutname'>
                    <option value="">Memebership Type</option>
                    <option value="3">BRONGE (3Month)</option>
                    <option value="6">SILVER (6Month)</option>
                    <option value="12">GOLD (12Month)</option>
                </select>
                <br/> <br />
                <img src={qr} alt="no found" className='w-50' /><br />
                <h3><label htmlFor="payment">Please Pay: &#8377;{amt}</label><br /></h3>
               
                <div className='custom-file'>
                <input type="name" className='w-75 text-start shadow-lg workoutname' placeholder='Enter Transaction ID' value={tid} onChange={(e)=>{setTid(e.target.value)}} />
                </div>
                 <br/><br />
            <input type="submit" value="Register" className="btnview"/>
        </form>
        </div>
        </div>
         </>
    )
}
export default Getmem