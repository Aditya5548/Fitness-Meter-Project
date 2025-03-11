import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import SidebarUser from './SidebarUser';
import Workmonthly from './workmonthly';

function workcalc(){
    var [pushup,setPushup]=useState()
    var [pullup,setPullup]=useState()
    var [Hamercut,setHamercut]=useState()
    var [Situp,setSitup]=useState()
    var [Benchpress,setBenchpress]=useState()
    const navigate=useNavigate()
    var Pushupduration=[]
    var Pushuprepl=[]
    var Pushupsets=[]
    var Pushupcburn=[]

    var Pullupduration=[]
    var Pulluprepl=[]
    var Pullupsets=[]
    var Pullupcburn=[]

    var Hamercutduration=[]
    var Hamercutrepl=[]
    var Hamercutsets=[]
    var Hamercutcburn=[]

    var Situpduration=[]
    var Situprepl=[]
    var Situpsets=[]
    var Situpcburn=[]

    var Benchduration=[]
    var Benchrepl=[]
    var Benchsets=[]
    var Benchcburn=[]
    const validate =()=>{
        if(!localStorage.getItem('user')){
            navigate('/Signin')
        }
    }

    const Viewall=async ()=>{
        //push-up
        const pushupdata=await fetch(`https://fitness-meter.onrender.com/Wcalc/${localStorage.getItem('user')}/Push-Up`);
        const result1= await pushupdata.json();

        //pull-up
        const pullup=await fetch(`https://fitness-meter.onrender.com/Wcalc/${localStorage.getItem('user')}/Pull-Up`);
        const result2= await pullup.json();

        //pull-up
        const Hamercut=await fetch(`https://fitness-meter.onrender.com/Wcalc/${localStorage.getItem('user')}/Hamercut`);
        const result3= await Hamercut.json();

        //situp
        const situp=await fetch(`https://fitness-meter.onrender.com/Wcalc/${localStorage.getItem('user')}/Situp`);
        const result4= await situp.json();
        
        //Bench Press
        const Benchpress=await fetch(`https://fitness-meter.onrender.com/Wcalc/${localStorage.getItem('user')}/Bench-press`);
        const result5= await Benchpress.json();


        if(pushupdata.ok){
            setPushup(result1.user)    
            setPullup(result2.user) 
            setHamercut(result3.user) 
            setSitup(result4.user)  
            setBenchpress(result5.user)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }
    }
    useEffect(()=>{
        Viewall() 
        validate()
      },[])
    //push 
    pushup?.map((e)=>(
        Pushupduration.push(Number(e.duration)),
        Pushuprepl.push(Number(e.repl)),
        Pushupsets.push(Number(e.sets)),
        Pushupcburn.push(Number(e.cburn))
    )) 
        let element=Pushupduration.length
        var pushdur=0
        var pushrepl=0
        var pushset=0
        var pushcburn=0
        for (let i=0;i<element;i++){
            pushdur=pushdur+Pushupduration[i]
            pushrepl=pushrepl+Pushuprepl[i]
            pushset=pushset+Pushupsets[i]
            pushcburn=pushcburn+Pushupcburn[i]
    }

    //pull-up
    pullup?.map((e)=>(
        Pullupduration.push(Number(e.duration)),
        Pulluprepl.push(Number(e.repl)),
        Pullupsets.push(Number(e.sets)),
        Pullupcburn.push(Number(e.cburn))
    ))
    let element2=Pullupduration.length
    var pulldur=0
    var pullrepl=0
    var pullset=0
    var pullcburn=0
    for (let i=0;i<element2;i++){
        pulldur=pulldur+Pullupduration[i]
        pullrepl=pullrepl+Pulluprepl[i]
        pullset=pullset+Pullupsets[i]
        pullcburn=pullcburn+Pullupcburn[i]
    }


    //Hamercut
    Hamercut?.map((e)=>(
        Hamercutduration.push(Number(e.duration)),
        Hamercutrepl.push(Number(e.repl)),
        Hamercutsets.push(Number(e.sets)),
        Hamercutcburn.push(Number(e.cburn))
    ))
    let element3=Hamercutduration.length
    var Hamerdur=0
    var Hamerrepl=0
    var Hamerset=0
    var Hamercburn=0
    for (let i=0;i<element3;i++){
        Hamerdur=Hamerdur+Hamercutduration[i]
        Hamerrepl=Hamerrepl+Hamercutrepl[i]
        Hamerset=Hamerset+Hamercutsets[i]
        Hamercburn=Hamercburn+Hamercutcburn[i]
    }

    

    //situp
    Situp?.map((e)=>(
        Situpduration.push(Number(e.duration)),
        Situprepl.push(Number(e.repl)),
        Situpsets.push(Number(e.sets)),
        Situpcburn.push(Number(e.cburn))
    ))
    let element4=Situpduration.length
    var Sdur=0
    var Srepl=0
    var Sset=0
    var Scburn=0
    for (let i=0;i<element4;i++){
        Sdur=Sdur+Situpduration[i]
        Srepl=Srepl+Situprepl[i]
        Sset=Sset+Situpsets[i]
        Scburn=Scburn+Situpcburn[i]
    }

        //Benchpress
        Benchpress?.map((e)=>(
            Benchduration.push(Number(e.duration)),
            Benchrepl.push(Number(e.repl)),
            Benchsets.push(Number(e.sets)),
            Benchcburn.push(Number(e.cburn))
        ))
        let element5=Benchduration.length
        var Bdur=0
        var Brepl=0
        var Bset=0
        var Bcburn=0
        for (let i=0;i<element5;i++){
            Bdur=Bdur+Benchduration[i]
            Brepl=Brepl+Benchrepl[i]
            Bset=Bset+Benchsets[i]
            Bcburn=Bcburn+Benchcburn[i]
        }


    return (
     <>
        <div className="container-fluid">
         <div className="row">
          <SidebarUser />
     <div className="adminlogout">
        <div className='px-3'>
        <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</button>
        </div>
        <div>
          <button className="btnset2" onClick={()=>{localStorage.removeItem('user'),localStorage.removeItem('username'),navigate('/Signin')}}>Logout</button>
        </div>
     </div>
     </div>
     <div className='row my-5'>
        <div className="col-sm-9 mx-auto shadow-lg rounded-3 tablefixed">
            <h2  className='text-center'>Your Complete Workout</h2>
            <table className='table table-dark table-striped-columns'>
                <thead>
                <tr className='py-2 text-center'>
                    <th></th>
                    <th>DURATION</th>
                    <th>SETS</th>
                    <th>REPLICATION</th>
                    <th>CALORIES BURN</th>
                </tr>  
                </thead>


                <tbody>
                    <tr>
                       <th>PUSH-UP</th>
                       <th>{pushdur}</th>
                       <th>{pushset}</th>
                       <th>{pushrepl}</th>
                       <th>{pushcburn}</th>
                    </tr>
                    <tr>
                       <th>PULL-UP</th>
                       <th>{pulldur}</th>
                       <th>{pullset}</th>
                       <th>{pullrepl}</th>
                       <th>{pullcburn}</th>
                    </tr>
                    <tr>
                       <th>HAMERCUT</th>
                       <th>{Hamerdur}</th>
                       <th>{Hamerset}</th>
                       <th>{Hamerrepl}</th>
                       <th>{Hamercburn}</th>
                    </tr>
                    <tr>
                       <th>SIT-UP</th>
                       <th>{Sdur}</th>
                       <th>{Sset}</th>
                       <th>{Srepl}</th>
                       <th>{Scburn}</th>
                    </tr>
                    <tr>
                       <th>BENCH-PRESS</th>
                       <th>{Bdur}</th>
                       <th>{Bset}</th>
                       <th>{Brepl}</th>
                       <th>{Bcburn}</th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="col-sm-9 mx-auto shadow-lg rounded-3 tablefixed">
            <Workmonthly/>
        
        </div>  
       </div> 
       </div>  
     </>
    );
}

export default workcalc;
