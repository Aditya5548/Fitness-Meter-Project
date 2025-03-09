import React from 'react';
import Pendingimg from '../assets/pending.jpg'

function Pending(){
    return (
        <div>
           <center>
            <h3>Your verifcation is pending & it will verfiy within 3-4 hours</h3>
            <br />
            <img src={Pendingimg} alt="" className='w-50'/>
            
            </center> 
            
        </div>
    );
}

export default Pending;
