import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';
import { Link } from 'react-router-dom';

function Messageread(){

    const navigate=useNavigate()
    var [data,setData]=useState()
    var [msg,setMsg]=useState()
    var [umsg,setUMsg]=useState()

    
    const Viewall=async ()=>{

        const response=await fetch('https://fitness-meter.onrender.com/contactdata');
        const result= await response.json();
        if(response.ok){
            setData(result)
            console.log(result)
            setMsg(result.msg)

        }
    }
        //calling validation
        useEffect(()=>{
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
            <center><h2>User Messages</h2></center>
            <span><h4>{msg}</h4></span>
            <table className="dimention table table-dark">
                <thead>
                    <tr>
                    <th>UID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>TOPIC</th>
                    <th colSpan="2">MESSAGE</th>
                    </tr>
                </thead>

                <tbody  className='tbody-secondary'>
                {data?.map((e)=>(
                        <tr>
                            <td>{e.uid}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.topic}</td>
                            <td colSpan="2">{e.message}</td>
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

export default Messageread;
