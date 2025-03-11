import React from 'react';
import { Link }  from 'react-router-dom' 

function Sidebar(){
    return (
        <div>
            
<div className="offcanvas offcanvas-start bg-secondary" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Admin DashBoard</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <ul type="none" className='py-4 sidebaroption'>
      <li className='bg-danger py-3 px-4 m-3'>
            <Link to="/Addash" className='nav-link'>DashBoard</Link>
        </li>
    <li className='bg-primary py-3 px-4 m-3'>
        <Link to="/Adprofile" className='nav-link'>Profile </Link>
    </li>
    <li className='bg-danger py-3 px-4 m-3'>
        <Link to="/Viewuser" className='nav-link'>View All User</Link>
    </li>
    <li className='bg-primary py-3 px-4 m-3'>
        <Link to="/Viewmembership" className='nav-link'>View Prime Members</Link>
    </li>
    <li className='bg-danger py-3 px-4 m-3'>
        <Link to="/WComplete" className='nav-link'>Today Workout</Link>
    </li>
    <li className='bg-primary py-3 px-4 m-3'>
        <Link to="/Messageread" className='nav-link'>Messages</Link>
    </li>
    <li className='bg-danger py-3 px-4 m-3'>
        <Link to="/viewfeed" className='nav-link'>All Feedbacks</Link>
    </li>

  </ul>
</div>
            
        </div>
    );
}

export default Sidebar;
