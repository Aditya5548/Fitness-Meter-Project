import React, { useEffect, useState } from 'react';
import  img1 from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import {Link,} from 'react-router-dom'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
function Navbar(){
  const [u,setU]=useState("")
  const [p,setP]=useState("")
  const [un,setUN]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{setU(localStorage.getItem('user'))})
  useEffect(()=>{setP(localStorage.getItem('Admin'))})
  useEffect(()=>{setUN(localStorage.getItem('username'))})
    return (
        <>

<div>
<nav id="myNavbar" data-spy="scroll" data-target="#myNavbar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand d-flex" href="#">
        <img src={img1} className="imgsize" alt="" />
        &nbsp;&nbsp;
        <p className='my-auto'>Fitness Meter</p>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarToggle">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav" id="navbarcss">
                <li className="nav-item">
                    <a className="nav-link"href="/">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Contactall">CONTACT</a>
                </li>
                {
                  un==null
                  ?
                <>
                <li className="nav-item loginsignup"><a className="nav-link" href="/SigninDash">LOGIN</a></li>
                 <li className="nav-item loginsignup"><a className="nav-link" href="/Signup">SIGNUP</a></li>
                 </>
                 :
                 <>
                <div className="dropdown">
                   <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{un}</button>
                   <ul className="dropdown-menu loginsign">
                      <li><button className="dropdown-item loginsignin" onClick={()=>{navigate('/Userdash')}}>Dashboard</button></li>
                      <li><button className="dropdown-item loginsignin" onClick={()=>{localStorage.removeItem('user'),localStorage.removeItem('username'),navigate('/Signin')}}>Logout</button></li>
                    </ul>
                </div>
                </>                 
                }
            </ul>
        </div>
    </nav>


    <div className="container-fluid">
        <div className="row">
           
        </div>  
    </div>
</div>
        
        </>
    );
}

export default Navbar;
