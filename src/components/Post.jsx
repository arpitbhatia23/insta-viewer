import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
  const username = useSelector(state=>state.data)
  const user =username?.data?.data?.username 
  console.log(user)
  const [post ,setpost]=useState()
  const proxyUrl = 'http://localhost:3000/proxy?url=' 


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
setpost(data)
    }
    catch (error){
      console.log(error)
    }
  }
  useEffect(()=>{
    search();
  },[])
const items =post?.data?.items


  return (


    <div className='w-full  flex flex-col  items-center  text-red-600'>   {user&&post&&post.data&&post.data.items? <div className=' flex justify-center'> stories 
      
      
    {items.map(items=>(
     <div  key={items.id}>

     <div className='  flex justify-center bg-slate-400 gap-y-2'>
      <img crossOrigin='anonymous' src={ proxyUrl + items&& items.video_url} controls className='h-[600px] w-[400px]' ></img> <br />
      
      </div>
     </div>
    )
)}

    </div>:
   user&& <div >not post</div>
  }
  </div>





  )

}

export default Post
