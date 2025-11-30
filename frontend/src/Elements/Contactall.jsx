import React, { useEffect ,useState } from 'react';
import Navbar from './Navbar';
function Contactall(){

    let [name , setName]=useState("")
    let [email , setEmail]=useState("")
    let [topic, setTopic]=useState("")
    let [message , setMessage]=useState("")
    let [msg, setMsg]=useState("")
    const uid=localStorage.getItem('user')
        
    let regcode=async (e)=>{
        e.preventDefault()
        const user={uid,name,email,topic,message}
        console.log(user)
        var response=await fetch(`${import.meta.env.VITE_URL}/contact`,{
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
            setName("")
            setEmail("")
            setTopic("")
            setMessage("")
            setTimeout(() => {location.reload(); }, 100)
        }
        else{
            setName("")
            setEmail("")
            setTopic("")
            setMessage("")
            setTimeout(() => {location.reload(); }, 100)
        }
    }

    return (  <>
            <div className="container-fluid">
            <div className="row">

                <Navbar />
            </div>
             <div className="row justify-content-center align-items-center my-5 py-5">   
                    <div className="col-sm-6 col-md-6 col-sm-6 py-5  workoutdata">  
                        <form action="" onSubmit={regcode} >
                            <center>
                            <h2 className='fw-bold formclass'>Contact US</h2> 
                            <br />
                            <span className='text-danger'><h4>{msg}</h4></span>
                            <br />
                            <input type="name" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter Your Name' className='w-75 text-start shadow-lg workoutname'/>
                            <br /><br />                            
                            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Your Email' className='w-75 text-start workoutname'/>
                            <br /><br />
                            <input type="text" value={topic} onChange={(e)=>{setTopic(e.target.value)}}  placeholder='Topic' className='w-75 text-start workoutname'/>
                            <br /><br />
                            <textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  placeholder='Message' rows="4" cols="40" className="w-75 workoutname2"/>
                            <br /><br />
                            
                            <input type="submit" value="Summit Data" className='btnview'/>
                            </center>
                    </form>                     
                    </div>
                 </div>
                 </div>
                 </>
    );
}

export default Contactall;



