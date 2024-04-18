import React, { useEffect } from 'react'
import { useState } from 'react';

function Profile({
    className="",    
}) { 

  return (
    <div className={`  w-full  ${className} flex flex-col justify-start items-center text-white text-2xl `}>
        <div className=' flex items-start pl-2 py-2'><img src='' alt="profile" className=' bg-slate-950 h-24 w-24 rounded-full' /></div>
    <div className=' font-cursive'><span> </span> 
    <div className='text-center '></div> </div>
<div className='flex flex-row text-xl '>
<span className=' px-5'> followers : </span> |
<span className=' px-5'> followeing : </span>

<button onClick={Profile}> abc</button>
</div>
<span className=' px-5 text-xl '>  </span>





    </div>
  )
}

export default Profile
