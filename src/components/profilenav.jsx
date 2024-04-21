import React from 'react'
import { useSelector } from 'react-redux'
import {Link}from 'react-router-dom'
const Profilenav = () => {
    const profilenav=[
        {id:1,
        names:'stories',
      link:'/stories'
      },
        {
            id:2,
            names:'posts&reel',
            link:'/post'

        },
        {
            id:3,
            names:'reels',
            link:'/reels'

        },
        {
            id:4,
            names:'Highlight',
            link:'/highlight'

        },
        {
            id:5,
            names:'tagged',
            link:'/tagged'

        }
    ]
    const profiledata=useSelector(state=>state.data)
    const profiledetail=profiledata?.data?.data
  return (<>
  {profiledetail&&
    <div className=' flex justify-center items-center space-x-24 text-white font-cursive  text-2xl py-8'>
      { profilenav.map(({id,names,link})=>(
     
 <Link key={id} to={link} ><div key={id}>{names}</div> </Link>
      ))}
    </div>
     }

    </>
  )
}

export default Profilenav
