import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';
import { Link } from 'react-router-dom';
function Viewfeed(){
    const navigate=useNavigate()
    var [data,setData]=useState()
    var [msg,setMsg]=useState()
    
    const Viewall=async ()=>{

        const response=await fetch('https://fitness-meter.onrender.com/feedback');
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
    
        //validation end
   

    return (
     <>
     <Sidebar />
     <div className="adminlogout">
        <div>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
           <button  className="btnset2" onClick={()=>{localStorage.removeItem('Admin'),localStorage.removeItem('adminname'),navigate('/Adminlogin')}}>Logout</button>
        </div>
     </div>
    
     <div className=' py-3 row'>
        <h3  className='text-center'>All Users #lec30</h3>
        <div className="col-sm-9 mx-auto my-4 shadow-lg p-5 rounded-3">
            <table className='table table-dark table-striped-columns'>
                <thead>
                <tr className='py-2 text-center'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>DateTime</th>
                </tr>
                </thead>

                <tbody>
                {data?.map((e)=>(
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.type}</td>
                            <td>{e.Datetime}</td>
                        </tr>
                ))}
                </tbody>

                <tfoot>
                     <tr><td colSpan={5} className='text-center'>{msg}</td></tr>
                </tfoot>
            </table>
            <p className='text-center'><Link className='btn btn-secondary my-1 mx-1 0' to={`/Addash/`}> Go Back</Link> </p>
        </div>
       </div>
     
       
     </>
    );
}

export default Viewfeed;
