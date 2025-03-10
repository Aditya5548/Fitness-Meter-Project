import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';
import Usersummary from './Usersummary';
function Addash(){
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
   

    return (
     <>
     <div>
     <Sidebar />

     <div className="adminlogout">
        <div>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
           Hey,  {localStorage.getItem('adminname')}
           &nbsp;&nbsp;
           <button  className="btnset2" onClick={()=>{localStorage.removeItem('Admin'),localStorage.removeItem('adminname'),navigate('/Adminlogin')}}>Logout</button>
        </div>
     </div>
     <br />
     <Usersummary />

     </div>
     

     
     
       
     </>
    );
}

export default Addash;
