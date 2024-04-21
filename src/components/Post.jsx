import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
  const username = useSelector(state=>state.data)
  const user =username?.data?.data?.username 
  console.log(user)
  const search = async()=>{
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${user}`
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
console.log(data)
    }
    catch (error){
      console.log(error)
    }
  }
  useEffect(()=>{
    search();
  },[])
  return (<>{user&&
    <div className='text-white flex justify-center '>
      post
    </div>}
    </>
  )
}

export default Post
