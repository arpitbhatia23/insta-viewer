import React from 'react'
import Search from './Search'
import Profile from './Profile'

function Homepage() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-slate-900 to-gray-700'>
        <Search className='flex justify-center'/>
        <Profile className='h-60'/>
      
    </div>
  )
}

export default Homepage
