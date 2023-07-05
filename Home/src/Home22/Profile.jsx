import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className='ProfileOuterDiv'>
            <div className="imageUpperDiv">
                <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg" alt="" />
                <h2>Alexandra Caulea</h2>
                <p>I enjoy drinking a cup of coffee every day.</p>
            </div>
            <div className="buttonLowerDiv">
                <div className="followerDiv">
                    <div >
                        <h2>172</h2>
                        <p>POSTS</p>
                    </div>
                    <div >
                        <h2>47</h2>
                        <p>FOLLOWERS</p>
                    </div>
                    <div >
                    <h2>20</h2>
                    <p>FOLLOWING</p>
                    </div>
                </div>
                <div className="buttonDiv">
                    <button style={{backgroundColor:"#9b45e4"}}>Follow</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{backgroundColor:"#e13a9d"}}>Message</button>
                </div>
            </div>
        </div>
    )
}

export default Profile