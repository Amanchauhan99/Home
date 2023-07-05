import React, { useContext } from 'react';
import { mycontext } from './Context';
// import "./Navbar.css"
const Nav = () => {

    const {LoggedIn,setLoggedIn} = useContext(mycontext)
  return (
    <div className='nav'>
       <div id='title'>
          <h2>React Context</h2>   
       </div>
       <div id="menu">
        <a href=''>Home</a>
        <a href=''>Profile</a>
        <a href=''>Products</a>
        <a href=''>Support</a>
        <button onClick={()=>{
            setLoggedIn(false)
        }} >
          Logout

        </button>
        
       </div>
    </div>
  );
}

export default Nav;