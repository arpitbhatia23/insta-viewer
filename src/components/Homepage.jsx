import React from 'react'
import Search from './Search'
import Profile from './Profile'
import Profilenav from './profilenav'
import {BrowserRouter as Router , Route ,Link, Routes}from 'react-router-dom'
import Stories from './stories'
import Post from './Post'
import Reel from './Reel'
import Highlight from './Highlight'
import Tagged from './Tagged'
function Homepage() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-slate-950 to-gray-700'>
        <Search className='flex justify-center'/>
        <Router>
        <Profile className='h-60'/>
        <Profilenav/>
          <Routes>

            <Route path='/stories' element={<Stories></Stories>}></Route>
            <Route path='/post' element={<Post/>}></Route>
            <Route path='/reels' element={<Reel/>}></Route>
            <Route path='/highlight' element={<Highlight/>}></Route>
            <Route path='/tagged' element={<Tagged/>}></Route>


          </Routes>
        </Router>
      
    </div>
  )
}

export default Homepage
