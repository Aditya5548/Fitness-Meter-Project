import React, { useEffect ,useState} from 'react';

import { data, Link }  from 'react-router-dom' 

function SidebarUser(){
        var [data,setData]=useState({})
        const [st,setSt]=useState(0)
        const [stshow,setStshow]=useState(0)
        const [mvalid,SetMvalid]=useState()
        const Viewall=async ()=>{
            const response=await fetch(`https://fitness-meter.onrender.com/user/${localStorage.getItem('user')}`);
            const result= await response.json();
            setData(result)
        }
        const validate =()=>{
        if(!localStorage.getItem('user')){
            navigate('/Signin')
            }
        }
        const cheakmemship=async()=>{
            var response=await fetch(`https://fitness-meter.onrender.com/mport/${localStorage.getItem('user')}`)
            const data =await response.json()
            if (data.msg=="user found"){
                console.log(data.res.Pstatus)
                setSt(data.res.Pstatus)
                setStshow(data.res.mtype)
                SetMvalid(data.res.end)
                      
            }   
        }
        //calling validation
        useEffect(()=>{
            validate()
            Viewall()
            cheakmemship()
        },[])
    return (
        <div>
            
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><Link to="/Uprofile" className='nav-link'><h4>Hey, {data.name}</h4></Link></h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  {stshow && stshow!='e'?(stshow=='N'?'':(stshow=='Bronze'?<><span className='text-white bg-danger verified'><div><h4>Bronze</h4></div><div className='verifiedbtn'><h4 className='bg-warning p-2'><b>Valid: </b>{mvalid}</h4></div></span></>:(stshow=='s'?<><span className='text-white bg-secondary verified'><div><h3>Silver</h3></div><div className='verifiedbtn'><h4 className='bg-danger p-2'><b>Valid: </b>{mvalid}</h4></div></span></>:(stshow=='Gold'?<><span className='text-white bg-warning verified'><div><h2>Gold</h2></div><div className='verifiedbtn'><h4 className='bg-danger p-2'><b>Valid: </b>{mvalid}</h4></div></span></>:'')))):''} 
       
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
