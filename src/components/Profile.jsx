import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Profile({
    className="",    
}) {  const userdata = useSelector(state=>state.data)
const userdetails = userdata?.data?.data
const proxyUrl = 'http://localhost:3000/proxy?url=' 
const profilepic =userdetails&&userdetails.profile_pic_url
  return ( <> { userdetails ?(
    <div className={`  w-full font-cursive ${className} flex flex-col justify-start items-center text-white text-2xl  `}>
        <div className=' flex items-start pl-2 py-2'><img  crossOrigin="anonymous" src={proxyUrl + profilepic } alt="profile" className=' bg-slate-950 h-24 w-24 rounded-full' /></div>
    <div className=' font-cursive'><span>{userdetails&&userdetails.username} </span> 
    <div className='flex justify-center items-center'>{userdetails&&userdetails.full_name}</div>  </div>
<div className='flex flex-row text-xl '>
<span className=' px-5'> followers {userdetails&&userdetails.follower_count} </span> 
<span className=' px-5'> followeing  {userdetails&&userdetails.following_count} </span>

</div>
<span className='px-5 text-xl '>{userdetails&&userdetails.biography}  </span>
  

    </div>) : (<div className='text-white text-4xl text-center font-cursive py-24'>{userdata&&userdata.data&&userdata.data.detail} </div>) }
    
    </>
  )
}

export default Profile
