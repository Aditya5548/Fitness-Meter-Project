import './App.css'
import Home from './Mainapp/home'
import Signin from './Mainapp/Signin'
import Signup from './Mainapp/Signup'
import Raoutes from './Mainapp/Raoutes'
import Userdash from './Userapp/Udash'
import Adminlogin from './Elements/Adminlogin'
import Addash from './Adminapp/Addash'
import Notfound from './Mainapp/notfound'
import Viewuser from './Adminapp/Viewuser'
import { HashRouter,Route,Routes } from 'react-router-dom'
import Adprofile from './Adminapp/Adprofile'
import Uprofile from './Userapp/Uprofile'
import Addfeed from './Userapp/AddFeed'
import Viewfeed from './Adminapp/viewfeed'
import Membership from './Elements/Membership'
import  Getmem from './Userapp/Getmem'
import Viewmembership from './Adminapp/viewmembership'
import WComplete from './Adminapp/WComplete'
import Viewworkout from './Elements/viewworkout'
import Profileedit from './Userapp/Profileedit'
import UserProfileEditbyAdmiin from './Adminapp/UserProfileEditbyAdmiin'
import Contact from './Elements/Contact'
import Workcalc from './Elements/workcalc'
import SigninDash from './Mainapp/SigninDash'
import Contactall from './Elements/Contactall'
import Messageread from './Adminapp/Messageread'


function App() {
  return (
    <>
    {/*outer start*/}
    <div className="container-fluid">
   
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Raoutes' element={<Raoutes/>} />
      <Route path='/:400' element={<Notfound/>} />
  
      <Route path='/Signup' element={<Signup/>} />
      

      <Route path='/Adminlogin' element={<Adminlogin/>} />
      <Route path='/Signin' element={<Signin/>} />

      <Route path='/Addash' element={<Addash/>} />
      <Route path='/Userdash' element={<Userdash/>} />

      <Route path='/Viewuser' element={<Viewuser/>} />
      <Route path='/Viewfeed' element={<Viewfeed/>} />
      <Route path='/Getmem' element={<Getmem/>} />

      <Route path='/Adprofile' element={<Adprofile/>} />
      <Route path='/Uprofile' element={<Uprofile/>} />
      
      <Route path='/Addfeed' element={<Addfeed/>} />
      <Route path='/Membership' element={<Membership/>} />
      <Route path='/Viewmembership' element={<Viewmembership/>} />
      <Route path='/WComplete' element={<WComplete/>} />
      <Route path='/Viewworkout' element={<Viewworkout/>} />
      <Route path='/Profileedit' element={<Profileedit/>} />
      <Route path='/UserProfileEditbyAdmiin' element={<UserProfileEditbyAdmiin/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Workcalc' element={<Workcalc/>} />
      <Route path='/SigninDash' element={<SigninDash/>} />
      <Route path='/Contactall' element={<Contactall/>} />
      <Route path='/Messageread' element={<Messageread/>} />

      
    </Routes> 
    </HashRouter>

    </div>
    {/*outer end */}
    
    </>
  )
}

export default App
