import React, { useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Workout(){
    const navigate=useNavigate()
    let [msg , setMsg]=useState("")
    let [wname , setWname]=useState("")
    let [duration, setDuration]=useState("")
    let [sets , setSets]=useState("")
    let [repl , setRepl]=useState("")
    let [wcategory , setWcategory]=useState("")
    let [cburn , setCburn]=useState("")
    

    const uid=localStorage.getItem('user')
    let regcode=async (e)=>{
        e.preventDefault()
        const user={wname,duration,sets,repl,wcategory,cburn,uid}
        console.log(user)
        var response=await fetch('https://fitness-meter.onrender.com/wroute',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }  
        })
        const d=await response.json()
        console.log(d)
        if(d.msg){
            setMsg(d.msg)
            window.alert(d.msg)
            setWname("")
            setDuration("")
            setSets("")
            setRepl("")
            setWcategory("")
            setCburn("")
        }
        else{
            setMsg(d.msg)
            window.alert(d.msg)
            setWname("")
            setDuration("")
            setSets("")
            setRepl("")
            setWcategory("")
            setCburn("")
        }
    }


    const validate =()=>{
        if(!localStorage.getItem('user')){
            navigate('//Userdash')
        }
    }
    //calling validation
    useEffect(()=>{
        validate()
    },[])

    //validation end


    return (  <>
             <div className="row justify-content-center align-items-center my-3">   
                    <div className="col-md-6 py-5  workoutdata">  
                        <form action="" onSubmit={regcode} >
                            <center>
                            <h2 className='fw-bold formclass'>Add Workout: {localStorage.getItem('username')}</h2> 
                            <br/>
                            <span className='text-danger'><h4>{msg}</h4></span>
                            <select name="" value={wname} onChange={(e)=>{setWname(e.target.value)}}  className='w-75 workoutname'>
                                <option value="">Workout Name</option>
                                <option value="Push-Up">Push-Up</option>
                                <option value="Pull-Up">Pull-Up</option>
                                <option value="Hamercut">Hamercut</option>
                                <option value="Situp">Situp</option>
                                <option value="Bench-press">Bench-press</option>
                            </select>
                            <br /><br />
                            <input type="number" value={duration} onChange={(e)=>{setDuration(e.target.value)}}  placeholder='Durtion in Minutes' className='w-75 text-start shadow-lg workoutname'/>
                            <br /><br />                            
                            <input type="number" value={sets} onChange={(e)=>{setSets(e.target.value)}}  placeholder='No. of Sets' className='w-75 text-start workoutname'/>
                            <br /><br />
                            <input type="number" value={repl} onChange={(e)=>{setRepl(e.target.value)}}  placeholder='Replication of Sets' className='w-75 text-start workoutname'/>
                            <br /><br />
                            <select name="" value={wcategory} onChange={(e)=>{setWcategory(e.target.value)}}  className='w-75 workoutname'>
                                <option value="">Category of Workout: </option>
                                <option value="Arms">Arms</option>
                                <option value="Byceps">Byceps</option>
                                <option value="Triceps">Triceps</option>
                                <option value="Soulldern">Soullder</option>
                                <option value="Chest">Chest</option>
                                <option value="Back">Back</option>
                                <option value="Sthigh">thigh</option>

                            </select>
                            <br /><br />
                            <input type="number" value={cburn} onChange={(e)=>{setCburn(e.target.value)}}  placeholder='Apprx calory burn' className='w-75 text-start  workoutname'/>
                            <br /><br />
                            
                            <input type="submit" value="Summit Data" className='btnview'/>
                            </center>
                    </form>                     
                    </div>
                 </div>
                 </>
    );
}

export default Workout;



