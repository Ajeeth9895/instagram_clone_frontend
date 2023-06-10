import React, { useEffect, useState } from 'react';
import PostDetails from './PostDetails';
import { url } from '../App';
import axios from 'axios';
import ProfilePic from './ProfilePic';

function Profile() {

    let picLink = "https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"

    let email = sessionStorage.getItem('email')
    let token = sessionStorage.getItem('token')


    let [show, setShow] = useState(false)
    let [pic, setPic] = useState([])
    let [posts, setPosts] = useState([])
    let [changePic, setChangePic] = useState(false)
    let [user, setUser] = useState([])


    //toggling post details
    const toggleDetails = (value) => {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
            setPosts(value)
        }
    }

    //change profile pic
    const handleChangePic = async () => {
        if (changePic) {
            setChangePic(false)
        } else {
            console.log('else called');
            setChangePic(true)
        }
    }

    //get post details
    const profileDetails = async (dispatch) => {
        try {
            let res = await axios.get(`${url}/users/post-details`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            let profile = res.data.posts.filter((e) => e.email.includes(email))

            setPic(profile)
        } catch (error) {
            console.log(error);
        }

    }


    //getUserDetails
    const getUserDetails = async () => {
        try {
            let res = await axios.get(`${url}/profile-details/${email}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            )

            setUser(res.data.user)

        } catch (error) {
            console.log(error);
        }

    }



    useEffect(() => {
        profileDetails()
        getUserDetails()
    }, [changePic])


    if (user !== []) {
        return (
            <div className='d-flex justify-content-center' >
                <div className='profile'>

                    {/* profile frame */}
                    <div className='profile-frame'>

                        {/* profile pic */}
                        <div className='profile-pic'>
                            <img
                                onClick={() => handleChangePic()}
                                src={user.photo ? user.photo : picLink}
                                alt="" />
                        </div>

                        {/* profile data */}
                        <div className='profile-data'>
                            <h1>{user.fullName}</h1>
                            <div className='profile-info p-3 d-flex '>
                                <p>{pic.length} posts</p>
                                <p>{user.followers ? user.followers.length : "0"}followers</p>
                                <p>{user.following ? user.following.length : "0"} following</p>
                            </div>
                        </div>
                    </div>

                    <hr
                        style={{
                            width: "100%",
                            opacity: "0.8",
                            margin: "25px auto",
                        }}
                    />

                    <div className='gallery'>
                        {
                            pic.map((value) => {
                                return <>
                                    <img src={value.image} alt=''
                                        onClick={() => {
                                            toggleDetails(value)
                                           
                                        }}
                                    />
                                </>
                            })
                        }
                    </div>

                    {show && <PostDetails item={posts} user={user} toggleDetails={toggleDetails} />}
                    {
                        changePic &&
                        <ProfilePic handleChangePic={handleChangePic} />
                    }
                </div>
            </div >
        )
    } else {
        <div>Loading....</div>
    }
}

export default Profile
