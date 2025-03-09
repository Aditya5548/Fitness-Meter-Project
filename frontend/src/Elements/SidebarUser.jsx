import React, { useEffect ,useState} from 'react';

import { data, Link }  from 'react-router-dom' 

function SidebarUser(){
        var [data,setData]=useState({})
        const Viewall=async ()=>{
            const response=await fetch(`http://localhost:4000/user/${localStorage.getItem('user')}`);
            const result= await response.json();
            setData(result)
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
    return (
        <div>
            
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><Link to="/Uprofile" className='nav-link'><h4>Hey, {data.name}</h4></Link></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <ul type="none" className='py-4 sidebaroption'>
  <li className='bg-danger py-3 px-4 m-3'>
        <Link to="/Userdash" className='nav-link'>DashBoard</Link>
    </li>
    <li className='bg-primary py-3 px-4 m-3'>
        <Link to="/Uprofile" className='nav-link'>Profile </Link>
    </li>
        <li className='bg-danger py-3 px-4 m-3'>
            <Link to="/Profileedit" className='nav-link'>Edit User Profile</Link>
        </li>
    <li className='bg-primary py-3 px-4 m-3'>
        <Link to="/Workcalc" className='nav-link'>Complete Workout</Link>
    </li>

    <li className='bg-danger py-3 px-4 m-3'>
        <Link to="/Addfeed" className='nav-link'>Add FeedBack</Link>
    </li>    
    <li className='bg-primary py-3 px-4 m-3'>
        <Link to="/Contact" className='nav-link'>Contact Us</Link>
    </li>  

  </ul>
</div>
            
        </div>
    );
}

export default SidebarUser;
