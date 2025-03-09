import React from 'react';
import gold from '../assets/Gold.jpeg'
import silver from '../assets/Silver.jpeg'
import bronze from '../assets/images.jpeg'
import { Link } from 'react-router-dom';

function Membership(){
    return (
        <>
             
  <div className="col-2 membersize">
    <div className="card h-100 ">
      <img src={gold} className="card-img-top membership" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Gold Membership</h5>
        <p className="card-text d-flex justify-content-between"> 
            <span>12 Months</span>
            <span> <s><small className='text-danger'>&#8377; 15,000/-</small></s> &#8377; 10,000/-</span>
        </p>
      </div>
      <div className='memberbtn'>
        <Link  to="/Getmem"  className='memberbtnin'>GET</Link>
      </div>
    </div>
  </div>
  <div className="col-2 membersize">
    <div className="card h-100 ">
      <img src={silver} className="card-img-top membership" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Silver Membership</h5>
        <p className="card-text d-flex justify-content-between"> 
            <span>6 Months</span>
            <span> <s><small className='text-danger'>&#8377; 9,000/-</small></s> &#8377; 6,000/-</span>
        </p>
      </div>
      <div className='memberbtn'>
        <Link  to="/Getmem" className='memberbtnin'>GET</Link>
      </div>
    </div>
  </div>
  <div className="col-2 membersize">
    <div className="card h-100">
      <img src={bronze} className="card-img-top membership" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bronze Membership</h5>
        <p className="card-text d-flex justify-content-between"> 
            <span>12 Months</span>
            <span> <s><small className='text-danger'>&#8377; 6,000/-</small></s> &#8377; 4,000/-</span>
        </p>
      </div>
      <div className='memberbtn'>
        <Link to="/Getmem" className='memberbtnin'>GET</Link>
      </div>
    </div>
  </div>
        </>
    );
}

export default Membership;
