import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar';

function WComplete(){

    const navigate=useNavigate()
    var [data,setData]=useState()
    var [msg,setMsg]=useState()
    
    const Viewall=async ()=>{

        const response=await fetch('https://fitness-meter.onrender.com/Workoutdata');
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
        //calling validation
        useEffect(()=>{
            validate()
            Viewall()   
        },[])
      
    
        //validation end


    return (
        <div className="container-fluid">
        <div className="row">
        <div>
        <Sidebar />
        <div className="adminlogout">
        <div className='px-2'>
        <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
           Hey,  {localStorage.getItem('adminname')}
           &nbsp;&nbsp;
           <button  className="btnset2" onClick={()=>{localStorage.removeItem('Admin'),localStorage.removeItem('adminname'),navigate('/Adminlogin')}}>Logout</button>
        </div>
     </div> 
     </div>
     <div className="row">
            <div className="col-md-10 my-5 mx-auto tablefixed">
            <center><h2>Today Workout Data</h2></center>
            <h4>{msg}</h4>
            <table className="table table-dark">
                <thead>
                 <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>sets</th>
                    <th>replication</th>
                    <th>Workout category</th>
                    <th>calories burn</th>
                    <th>Workout time</th>
                    <th>Workout date</th>
                    </tr>
                </thead>

                <tbody  className='tbody-secondary'>
                {data?.map((e)=>(
                        <tr>
                            <td>{e.userID}</td>
                            <td>{e.wname}</td>
                            <td>{e.duration}</td>
                            <td>{e.sets}</td>
                            <td>{e.repl}</td>
                            <td>{e.wcategory}</td>
                            <td>{e.cburn}</td>
                            <td>{e.wtime}</td>
                            <td>{e.wdate}</td>
                        </tr>
                ))}
                </tbody>
            </table>
            </div>
            </div> 
        </div>

        </div>
    );
}

export default WComplete;
