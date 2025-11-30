import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Workdaily from './Workdaily';
function Viewworkout(){

    const navigate=useNavigate()
    var [data,setData]=useState()
    var [msg,setMsg]=useState()
    var [tcal,setTcal]=useState()
    
    const Viewall=async ()=>{

        const response=await fetch(`${import.meta.env.VITE_URL}/Workoutdata/${localStorage.getItem('user')}`);
        const result= await response.json();
        if(response.ok){
            setData(result.user)
            console.log(result.user)
            setMsg(result.msg)
        }
    }
        const validate =()=>{
            if(!localStorage.getItem('user')){
                navigate('/Signin')
            }
            else{
                navigate('/Userdash')
            }}
        //calling validation
        useEffect(()=>{
            validate()
            Viewall()   
        },[])
      
    
        //validation end


    return (
        <div>
            
            <div className="col-md-8 col-sm-12 my-2 mx-auto tablefixed">
            <h2 className='text-center bg-danger py-2 text-white'>Today Workout</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
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
            <Workdaily/>
            </div> 
            
        </div>
    );
}

export default Viewworkout;
