import React from 'react';
import Navbar from '../Elements/Navbar'
import Slider from '../Elements/Slider';

import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.webp'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/all';

function Home(){
    gsap.registerPlugin(ScrollTrigger)
    var x=localStorage.getItem('username')

    useGSAP(()=>{
        gsap.from('.ab>div',{
          x:500, 
          scale:0.1,
          duration:0.7,
          scrollTrigger:{
            trigger:'.ab>div',
            scroller:"body",
            start:"top 50%",
            end:"top 30%",
            scrub:2,

          }
        })
      })
    
    return (
        <>
        <Navbar/>
        <Slider/>

        <div className="row my-5 justify-content-center">
            <div className="col-md-4">
                <center>
                <h1 className='fw-bold'>
                Set Goals. <br />
                Log Workouts. <br />
                 Stay On Track.
                </h1>
                <p>Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals</p>
                <button className='bg-black text-light px-5 py-2'>Get Start</button>
                </center>
            </div>

            </div>

            <div className="row my-5 w-100">
                <div className="col-md-6 mx-auto p-1 rounded-1 d-flex">
                    <img src={pic3} alt="" className='w-75'/>
                <div />
                 <div className='col-md-4 my-auto px-3'>
                    <center>
                    <h3>You VS The Year 2025</h3>
                    <h7>Log 1,025 km in 2025
                    January 1, 2025-December 31,2025<br /> 
                    •317 Days Remaining
                    </h7>
                    </center>
                </div>
            </div>
            <div className="row text-center py-5">
                <div className="col-sm-12 ">
                    <h1>Push your limit</h1>
                    <p>Hit milestones and PR’s by taking on 
                        <br />a new challenge every month.</p>
                        <button className='btn btn-dark '>Join a Challenge</button>
                </div>
            </div>
            <div className="row justify-content-center py-10">
                <div className="col-md-5 my-auto">
                <h1>Built To Make You Better</h1><br />
                 <h2>Smarter Training</h2>
                 <p>Turn your phone or smartwatch into your coach—track your workouts and get tons of data and tips to help you run better.
                 </p>
                  <h2>Custom Workouts</h2>
                  <p>5K? Marathon? No matter where you ’re at, get personalized Training Plans built just for you and your goals.
                  </p>
                  <h2>Strong Community</h2>
                  <p>Create your own custom challenges to push yourself and your friends. For extra motivation, reach out and find support from the entire MapMyFitness™ community.
                  </p>
                </div>
                <div className="col-md-5 text-center">
                    <img src={pic4} alt="" className='w-75'/>
                </div>
            </div>           
        </div>
        <div className="row footter">
            <div className="col">
            <p>© Weather-Update</p> 
            <p>Made By: Aditya Kumar Yadav</p>
            <p>Email: Adityakumar9377@gmail.com</p>
            </div>
        </div>
        </>
        
    );
}

export default Home;
 