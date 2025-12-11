import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Adprofile(){
    const navigate=useNavigate()
    var [data,setData]=useState({})
    var [msg,setMsg]=useState()
    var {id}=useParams()
    var id=localStorage.getItem('Admin')
    
    var ekuser=async()=>{
        var response=await fetch(`${import.meta.env.VITE_URL}/Aduser/${id}`)
        var result= await response.json()
        if(response.ok)
        {
            setData(result)
        }
        else{
            setMsg(response.error)
        }
    } 
        const validate =()=>{
            if(!localStorage.getItem('Admin')){
                navigate('/Adminlog')
            }
        }
        //calling validation
        useEffect(()=>{
            ekuser()
            
        },[])
    
        
        //validation end
   

    return (
     <>
    <div className="container-fluid">
    <div className="row">
     <Sidebar />
     <div className="adminlogout">
        <div className='px-2'>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
           <button  className="btnset2" onClick={()=>{localStorage.removeItem('Admin'),localStorage.removeItem('adminname'),navigate('/Adminlogin')}}>Logout</button>
        </div>
     </div>
     </div>

     <div className="row my-5 ">
            <div className="col-6 col-md-4 col-sm-8 mx-auto signinbg py-5 px-5">
               <h2 className='fw-bold text-center'>Admin Profile</h2> 
               <br />
               <b>ID: </b>{id} <br />
               <b>Name: </b>{data.name} <br />
               <b>Email: </b>{data.email} <br />
               <b>Age: </b>{data.dob} <br />
               <b>Password: </b>{data.password}  <br />     
               <div className='btnset'><button type="submit" className='memberbtnin'>Update</button></div> 
            </div>
            </div>
        </div>
       
     </>
    );
}

export default Adprofile;
