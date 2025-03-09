import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SidebarUser from '../Elements/SidebarUser';
function Profileedit(){
    const navigate=useNavigate()
    let [Name , setName]=useState("")
    let [Number, setNumber]=useState("")
    let [Email , setEmail]=useState("")
    let [Password , setPassword]=useState("")
    let [msg , setMsg]=useState("")
    var [Dob,setDob]=useState("")
    var [Gender,setGender]=useState("")
    var [Country,setCounty]=useState("")
           //validation start
    const validate =()=>{
    if(!localStorage.getItem('user')){
        navigate('/Signin')
        }
        }

    let getdata=async()=>{
        const response=await fetch(`https://fitness-meter.onrender.com/user/${localStorage.getItem('user')}`);
        const result= await response.json();
        console.log(result)
        setName(result.name)
        setNumber(result.number)
        setEmail(result.email)
        setPassword(result.password)
        setCounty(result.country)
        setGender(result.gender)
    }

    const userupdate=async(e)=>{
        e.preventDefault()
        const _id=localStorage.getItem('user')
        const user={_id,Name,Number,Email,Password,Dob,Gender,Country}
        const response=await fetch(`http://localhost:4000/user/${localStorage.getItem('user')}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        const result=await response.json();
        console.log(result)
        if(result.msg=="updated Successfully..."){
            setMsg(result.msg)
            setName("")
            setNumber("")
            setEmail("")
            setPassword("")
            setCounty("")
            setGender("")
            setDob("")
            navigate('/Userdash')
        }
        else{
            setMsg(result.msg)
            window.alert(result.msg)
            setName("")
            setNumber("")
            setEmail("")
            setPassword("")
            setCounty("")
            setGender("")
            setDob("")
        }
       
    }
        
     //calling validation
      useEffect(()=>{
                    validate()
                    getdata()
        },[])
    return(
        <>
        <SidebarUser />
        <div className="adminlogout">
        <div>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
           Hey,  {localStorage.getItem('username')}
           &nbsp;&nbsp;
          <button className="btnset2" onClick={()=>{localStorage.removeItem('user') ,navigate('/Signin')}}>Logout</button>
        </div>
     </div>
        <div  className="row my-5 mx-5">
            <div  className="col-sm-6 text-center mx-auto signinbg py-5">
        <form action="" onSubmit={userupdate} >
        <h5 className='fw-bold '>User ID: {localStorage.getItem('username')}</h5> 
        
            <span className='text-danger'><h4>{msg}</h4></span>
                <input type="name" id="name" value={Name} onChange={(e)=>{setName(e.target.value)}}   placeholder='Enter Name' className='w-75 text-start shadow-lg workoutname'/>
                <br /><br />
                <input type="email" id="email"  value={Email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email' className='w-75 text-start  shadow-lg workoutname'/>
                <br /><br />
                <input type="number" id="number"  value={Number} onChange={(e)=>{setNumber(e.target.value)}}  placeholder='Enter Number' className='w-75 text-start shadow-lg workoutname'/>
            
            <br /><br />
                <input type="date" id="date" value={Dob} onChange={(e)=>{setDob(e.target.value)}}   className='w-75 text-start shadow-lg workoutname'/>
            <br />
            <br/>
                <select name="" id="gender"  value={Gender} onChange={(e)=>{setGender(e.target.value)}}  className='w-75 shadow-lg workoutname'>
                    <option value="">Select Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            <br />
                <br />
                <select name="" value={Country} onChange={(e)=>{setCounty(e.target.value)}}  className='w-75 shadow-lg workoutname'>
                    <option value="">Country</option>
                    <option value="india">india</option>
                    <option value="aamerica">america</option>
                    <option value="pakistan">pakistan</option>
                    <option value="bangladesh">bangladesh</option>
                </select>
                <br /><br />
                <input type="password" id="pass"   value={Password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='enter Passward' className='w-75  shadow-lg workoutname'/>
                <br/>
                <br/>
            <input type="submit" value="Update User" className='btnview'/>
        </form>
        </div>
        </div>
         </>
    )
}
export default Profileedit;