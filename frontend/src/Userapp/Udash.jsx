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
    const [m,setM]=useState()
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
        setTimeout(() => {
            setM(<Membership/>)
        }, 1100);
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
          <button className="btnset2" onClick={()=>{localStorage.removeItem('user'),localStorage.removeItem('username'),navigate('/Signin')}}>Logout</button>
        </div>
     </div>
     <div className="row w-100 px-5 py-2 justify-content-center">
     <h2 className='text-center py-2'>Welcome,  {localStorage.getItem('username')}</h2>
          {/* Valid membership giving */}

         {st && st!='e'?
            (st=='N'?
               <Pending/>:(st=='A' ?  
                   (x?
                      <><button onClick={()=>setX(!x)} className='swapwv'> View Today Workout</button> <Workout/></>
                        :<><button onClick={()=>setX(!x)} className='swapwv'>Add Workout</button><Viewworkout/></>)      
                        :"Something went wrong"))
                        :m} 
        
          {/* valid type membership giving */}
     </div>  
     </>
    );
}

export default Udash;
