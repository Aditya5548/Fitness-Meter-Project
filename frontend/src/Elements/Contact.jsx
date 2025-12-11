import React, { useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SidebarUser from './SidebarUser'
function Contact(){
    const navigate=useNavigate()
    let [name , setName]=useState("")
    let [email , setEmail]=useState("")
    let [topic, setTopic]=useState("")
    let [message , setMessage]=useState("")
    let [msg, setMsg]=useState("")
    const uid=localStorage.getItem('user')
            const validate =()=>{
                if(!localStorage.getItem('user')){
                    navigate('/Userdash')
                }
                else{
                    navigate('/Contact')
                }
            }
            //calling validation
            useEffect(()=>{
                validate()
            },[])
        
    let regcode=async (e)=>{
        e.preventDefault()
        const user={uid,name,email,topic,message}
        var response=await fetch(`${import.meta.env.VITE_URL}/contact`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        if(d.msg){
            setMsg(d.msg)
            setName("")
            setEmail("")
            setTopic("")
            setMessage("")
            setTimeout(() => {location.reload(); }, 100)
        }
        else{
            setMsg(d.msg)
            window.alert(d.msg)
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
            <SidebarUser />
        <div className="adminlogout">
        <div className='px-3'>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
          <button className="btnset2" onClick={()=>{localStorage.removeItem('user') ,localStorage.removeItem('username') ,navigate('/Signin')}}>Logout</button>
        </div>
     </div>
     </div>
             <div className="row justify-content-center align-items-center my-3">   
                    <div className="col-8 col-md-6 col-lg-4 py-5  workoutdata">  
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
                            <textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  placeholder='Message' rows="4" className="w-75 workoutname2"/>
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

export default Contact;



