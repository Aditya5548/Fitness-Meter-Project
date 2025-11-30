import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';
import { Link } from 'react-router-dom';

function viewmembership(){

    const navigate=useNavigate()
    var [data,setData]=useState()
    var [msg,setMsg]=useState()
    var [umsg,setUMsg]=useState()

    
    const Viewall=async ()=>{

        const response=await fetch(`${import.meta.env.VITE_URL}/Membershipdata`);
        const result= await response.json();
        if(response.ok){
            setData(result.user)
            console.log(result.user)
            setMsg(result.msg)

        }
    }
        const validate =()=>{
            if(!localStorage.getItem('Admin')){
                navigate('/Adminlog')
            }
        }
    async function Aprove(id,s){
        if(s=='N'){
            s='A'
        }
        else if(s=='A'){
            s='N'

        }
        console.log(s)
        const response=await fetch(`${import.meta.env.VITE_URL}/Membershipdata/${id}/${s}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
        })
        const result=await response.json();
        if(result.msg=="updated"){
            setUMsg('Updated')
            setTimeout(() => {location.reload(); }, 10)
        }
        else{
            setUMsg('Not Updated')
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
        <div>  
            <div className="col-md-10 my-5 mx-auto tablefixed">
            <center><h2>User Membership Data</h2></center>
            <span><h4>{msg}</h4></span>
            <table className="dimention table table-dark">
                <thead>
                    <tr>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th >Duration</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Transaction ID</th>
                    <th colSpan="2">Payment Status</th>
                    <th><center>Approval</center></th>
                    </tr>
                </thead>

                <tbody  className='tbody-secondary'>
                {data?.map((e)=>(
                        <tr>
                            <td>{e.Number}</td>
                            <td>{e.Email}</td>
                            <td>{e.age}</td>
                            <td>{e.Gender}</td>
                            <td>{e.mtype}</td>
                            <td>{e.start}</td>
                            <td>{e.end}</td>
                            <td>{e.tid}</td>
                            <td colSpan="2">{e.Pstatus=='N'?'NO':'YES'}</td>
                            <td><button className='btnview2' onClick={()=>Aprove(e._id,e.Pstatus)}>{e.Pstatus=='N'?'APPROVE':'DIS-APPROVE'}</button></td>
                        </tr>
                ))}
                </tbody>
            </table>
            <p className='text-center'><Link className='btn btn-secondary my-1 mx-1 0' to={`/Addash`}> Go Back</Link> </p>
            </div> 
        </div>
        </div>
        </>
    );
}

export default viewmembership;
