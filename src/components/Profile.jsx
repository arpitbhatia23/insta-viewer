import React, { useEffect } from 'react'
import { useState } from 'react';

function Profile({
    className="",
     
}) {
    const [info,setinfo]=useState("")
      const[pic,setpic]=useState("")  
    const Profile=async()=>{

        const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=i_s_h_a_3435';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a2d082869fmshd40b96058dbe32ep1c3ba6jsn5abd37a35253',
                'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
 setinfo(result)
        } catch (error) {
            console.error(error);
        }}
console.log(info&&info.data.
profile_pic_url
 )
  return (
    <div className={`  w-full  ${className} flex flex-col justify-start items-center text-white text-2xl `}>
        <div className=' flex items-start pl-2 py-2'><img src={info&&info?.data?.profile_pic_url} alt="profile" className=' bg-slate-950 h-24 w-24 rounded-full' /></div>
    <div className=' font-cursive'><span>{info&&info.data.username} </span> 
    <div className='text-center '>{info&&info.data.full_name}</div> </div>
<div className='flex flex-row text-xl '>
<span className=' px-5'> followers :{info&& info.data.follower_count
} </span> |
<span className=' px-5'> followeing :{info&&info.data.
following_count
} </span>

<button onClick={Profile}> abc</button>
</div>
<span className=' px-5 text-xl '> {info&&info.data.biography} </span>





    </div>
  )
}

export default Profile
