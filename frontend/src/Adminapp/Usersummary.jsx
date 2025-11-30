import React, { useEffect ,useState} from 'react';
import usertemp from '../assets/usertemp.png'
import allmem from '../assets/allmem.jpg'
import Workout2 from '../assets/Workout2.png'
import feed1 from '../assets/feed1.jpeg'
import message from '../assets/message.jpeg'


function Membership(){
    const [u,setU]=useState("")
    const [m,setM]=useState("")
    const [w,setW]=useState("")
    const [f,setF]=useState("")
    const [c,setC]=useState("")

    async function getalldata(){
        
        const response1=await fetch(`${import.meta.env.VITE_URL}/user`);
        const result1=await response1.json();
        setU(result1.length)

        const response2=await fetch(`${import.meta.env.VITE_URL}/Membershipdata`);
        const result2=await response2.json();
        setM(result2.user.length)
        
        const response3=await fetch(`${import.meta.env.VITE_URL}/Workoutdata`);
        const result3=await response3.json();
        setW(result3.user.length)

        const response4=await fetch(`${import.meta.env.VITE_URL}/feedback`);
        const result4=await response4.json();
        setF(result4.length)

        const response=await fetch(`${import.meta.env.VITE_URL}/contactdata`);
        const result5= await response.json();
        setC(result5.length)

    }
    useEffect(()=>{
        getalldata()
    },[])


    return (
        
        <>
        <div className="row w-100 justify-content-center">
         <center><h1>Welcome,  {localStorage.getItem('adminname')}</h1></center>
  <div className="col-2 membersize">
    <div className="card h-100 ">
      <img src={usertemp} className="card-img-top membership2" alt="..."/>
      <div className="card-body">
        <center>
            <h3>Total Users</h3>
            <h1>{u}</h1>
        </center>
      </div>
    </div>
  </div>
  <div className="col-2 membersize">
    <div className="card h-100 ">
      <img src={allmem} className="card-img-top membership2" alt="..."/>
        <div className="card-body">
        <center>
            <h3>Membership</h3>
            <h1>{m}</h1>
        </center>
      </div>
    </div>
  </div>
  <div className="col-2 membersize">
    <div className="card h-100">
      <img src={Workout2} className="card-img-top membership2" alt="..."/>
      <div className="card-body">
      <center>
            <h3>Today Workout</h3>
            <h1>{w}</h1>
        </center>
      </div>
    </div>
  </div>

  <div className="col-2 membersize">
    <div className="card h-100">
      <img src={message} className="card-img-top membership2" alt="..."/>
      <div className="card-body">
      <center>
            <h3>Messages</h3>
            <h1>{c}</h1>
        </center>
      </div>
    </div>
  </div>

  <div className="col-2 membersize">
    <div className="card h-100">
      <img src={feed1} className="card-img-top membership2" alt="..."/>
      <div className="card-body">
      <center>
            <h3>Total Feedback</h3>
            <h1>{f}</h1>
        </center>
    </div>   
    </div>
  </div>


  </div>
        </>
    );
}

export default Membership;
