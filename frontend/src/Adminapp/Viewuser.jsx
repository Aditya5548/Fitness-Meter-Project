import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';
import { Link } from 'react-router-dom';
function Viewuser(){
    const navigate=useNavigate()
    var [data,setData]=useState()
    var [msg,setMsg]=useState()
    
    const Viewall=async ()=>{

        const response=await fetch('https://fitness-meter.onrender.com/user');
        const result= await response.json();
        if(response.ok){
            setData(result)
            console.log(result)
        }
            
        else{
            setMsg(response.msg)
        }
    }
        const validate =()=>{
            if(!localStorage.getItem('Admin')){
                navigate('/Adminlog')
            }
        }
 
        //calling validation
        useEffect(()=>{
            validate()
            Viewall()
        },[])
function edit(id){
    localStorage.setItem('edit',id)
        navigate('/UserProfileEditbyAdmiin')
}
const userdel=async(id)=>{
    console.log(id)
    var usersdata ={id}
    var response=await fetch('https://fitness-meter.onrender.com/deleteuser',{
        method:"DELETE",
        headers:{"Content-Type":"application/json",
        },
        body:JSON.stringify(usersdata)
    });
    var data=await response.json();
    if(data.msg=="Deleted Successfully...."){
        window.alert(data.msg)
    }
    else{
        window.alert("Something Went Wrong.....")
    }
}
    
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
     <div className=' py-1 row'>
        <h3  className='text-center py-2'>All Users</h3>
        <div className="col-sm-9 mx-auto my-1 shadow-lg p-5 rounded-3 tablefixed">
            <table className='table table-dark table-striped-columns'>
                <thead>
                <tr className='py-2 text-center'>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Country</th>
                    <th colSpan={3} className='text-center'>Action</th>
                </tr>
                </thead>

                <tbody>
                {data?.map((e)=>(
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.number}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                            <td>{e.country}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={()=>{edit(e._id)}}>Edit</button></td>
                            <td><button className="btn btn-danger btn-sm" 
                            onClick={()=>
                            {userdel(e._id)}}>
                            Delete</button></td>
                        </tr>
                ))}
                </tbody>

                <tfoot>
                     <tr><td colSpan={8} className='text-center'>{msg}</td></tr>
                </tfoot>
            </table>
            <p className='text-center'><Link className='btn btn-secondary my-1 mx-1 0' to={`/Addash`}> Go Back</Link> </p>
        </div>
       </div>
       </div>
     
       
     </>
    );
}

export default Viewuser;
