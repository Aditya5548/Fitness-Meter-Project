import React, { useEffect, useState } from 'react';
import Navbar from '../Elements/Navbar';
import login from '../assets/login.jpg'
function Signin(){  
    return (
        <>
        <Navbar />
        <br /><br />
        <div className="row my-5 py-5 dashboardsigninsize">
            <div className="col-sm-10 col-md-6 py-5 text-center mx-auto dashboardsignin">
            <ul className="navbar-nav" id="navbarcss">
            <li className="nav-item loginsignup"><a className="nav-link" href="/Signin">USER lOGIN</a></li>
            <br />
            <li className="nav-item loginsignup"><a className="nav-link" href="/Adminlogin">ADMIN LOGIN</a></li>
            </ul>
            </div>
        </div>
        </>
    );
}

export default Signin;
