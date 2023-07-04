import React from 'react'
import "./AssignStyle.css"
const Assignment5 = () => {
    var mygap={
        marginRight:"10px",
        marginLeft:"10px",
        color:"white"
    }
   
    var img={
       
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXkv4h4fx2VznCZwZoB7Nycl_dVz9R2WWcZV6eA8A2w&s")'
    }
  return (
    <div className='continer'>
    <div className="homeContainer">
     <div className="top">
        <div className='topleft'>
            LOGO
        </div>
        <div className='topright'> 
            <div style={{background:"blue",color:"white", marginRight:"10px",marginLeft:"10px",border:"2px solid white"}}>HOME</div>
            <div style={mygap}>ABOUT</div>
            <div style={mygap}>MENU</div>
            <div style={mygap}>ORDER</div>
            <div style={mygap}>CONTACT</div>
        </div>
     </div>
     <div className="bottom" style={img} >
        <h2>HOME</h2>
        
     </div>
    </div>
    </div>
  )
}

export default Assignment5