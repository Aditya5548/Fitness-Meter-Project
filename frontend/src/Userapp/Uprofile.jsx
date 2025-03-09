import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import SidebarUser from '../Elements/SidebarUser';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usertemp from '../assets/usertemp.png'
function Uprofile(){
    const navigate=useNavigate()
    var [data,setData]=useState({})
    var [msg,setMsg]=useState()
    var {id}=useParams()
    var id=localStorage.getItem('user')
    
    const Viewall=async ()=>{
        const response=await fetch(`https://fitness-meter.onrender.com/user/${id}`);
        const result= await response.json();
        console.log(result)
        
        if(response.ok){
            setData(result)
            
        }
            
        else{
            setMsg(response.msg)
        }
    }
        const validate =()=>{
            if(!localStorage.getItem('user')){
                navigate('/Signin')
            }
        }
        //calling validation
        useEffect(()=>{
            validate()
            Viewall()
        },[])
    
        
        //validation end
   

    return (
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
     <center>
    <div className="row w-100 py-4 justify-content-center">
        <div className="col-md-4">
            <div className="profilephoto">
            <img src={usertemp} alt="" className='pphoto' />
           </div>
        </div>
        <div className="col-md-4">
            <div className='profiledetail'>
               <h1 className='fw-bold text-center'>User Profile</h1> 
               <b>ID: </b>{id} <br />
               <b>Name: </b>{data.name} <br />
               <b>Gender: </b>{data.gender} <br />
               <b>Dob: </b>{data.dob} <br />
               <b>Email: </b>{data.email} <br />
               <b>Age: </b>{data.number} <br />
               <b>Country: </b>{data.country} <br />
               <b>Password: </b>{data.password}  <br />     
               <div className='btnset'> <Link to="/Profileedit" className='memberbtnin'>Update</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="" className='memberbtnin'>Delete</Link> </div> 
            </div>


        </div>
    </div>
    </center>



       
     </>
    );
}

export default Uprofile;
