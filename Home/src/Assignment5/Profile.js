import React from 'react'

const Profile = ({id,img,name,gender}) => {
    var cardStyle={
        width:"200px",
        padding:"20px",
        boxShadow:"0 0 10px black"

    }
  return (
    <div style={cardStyle}>
     <img src={img}  height="150px" width="200px"/>
     <h1>{id}</h1>
     <h2>{name[0]}{name[1]}</h2>
     <p>{gender}</p>
    </div>
  )
}

export default Profile