import React from 'react'
import { useSelector } from 'react-redux'

const Reel = () => {
  const user =useSelector(state=>state.user )
  const search = async()=>{
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.5/reel?username_or_id_or_url=${user}`
    const option = {
      method : 'GET',
      headers:{
        'X-RapidAPI-Key': 'a2d082869fmshd40b96058dbe32ep1c3ba6jsn5abd37a35253',
                  'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
      }

    }
    try {
      const response =await fetch(url,option)
      const data = await response.json()

    }
    catch (error){
      console.log(error)
    }



  }
  return (<>
  {user&&
    <div className='text-white flex justify-center '>
      reel
    </div>
}
    </>
  )
}

export default Reel
