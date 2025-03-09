import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SidebarUser from '../Elements/SidebarUser';
import Membership from '../Elements/Membership';
import Pending from '../Elements/pending';
import Workout from '../Elements/Workout';
import Viewworkout from '../Elements/viewworkout';
function Udash(){
    // user login cheak
    const [st,setSt]=useState(0)
    const [stshow,setStshow]=useState(0)
    const [mvalid,SetMvalid]=useState()
    const navigate=useNavigate()
    const [x,setX]=useState(true)
        const validate =()=>{
            if(!localStorage.getItem('user')){
                navigate('/Signin')
            }
            else{
                navigate('/Userdash')
            }
        }
    //user login complete

    //membership cheak start
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
    //Membership cheak end

    //calling function
        useEffect(()=>{
            validate()
            cheakmemship()
        },[])   
        console.log(st)
    //validation function
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
          <button className="btnset2" onClick={()=>{localStorage.removeItem('user'),localStorage.removeItem('username'),navigate('/Signin')}}>Logout</button>
        </div>
     </div>
     <div className="row w-100 px-5 py-2 justify-content-center">
          {/* Valid membership giving */}
        {stshow && stshow!='e'?(stshow=='N'?'':(stshow=='Bronze'?<><span className='text-white bg-danger verified'><div><h4>Bronze</h4></div><div className='verifiedbtn'><h4 className='bg-warning p-2'><b>Valid: </b>{mvalid}</h4></div></span></>:(stshow=='s'?<><span className='text-white bg-secondary verified'><div><h3>Silver</h3></div><div className='verifiedbtn'><h4 className='bg-danger p-2'><b>Valid: </b>{mvalid}</h4></div></span></>:(stshow=='Gold'?<><span className='text-white bg-warning verified'><div><h2>Gold</h2></div><div className='verifiedbtn'><h4 className='bg-danger p-2'><b>Valid: </b>{mvalid}</h4></div></span></>:'')))): <Membership />} 
        {st && st!='e'?
            (st=='N'?
               <Pending/>:(st=='A' ?  
                   (x?
                      <><button onClick={()=>setX(!x)} className='swapwv'> View Today Workout</button> <Workout/></>
                        :<><button onClick={()=>setX(!x)} className='swapwv'>Add Workout</button><Viewworkout/></>)      
                        :"Something went wrong"))
                        :''} 
        
          {/* valid type membership giving */}
     </div>  
     </>
    );
}

export default Udash;
