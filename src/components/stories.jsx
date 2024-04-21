import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Stories = () => {
 const username = useSelector(state=>state.data)
 const user =username?.data?.data?.username 
const [stories,setstories]=useState(null)
 console.log(user)
 const proxyUrl = 'http://localhost:3000/proxy?url=' 

    const search = async()=>{

      const params = new URLSearchParams({ username_or_id_or_url: user && user, url_embed_safe: true });
        const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/stories?${params}`
        const option = {
          method :'GET',
          headers:{
            'X-RapidAPI-Key': 'a2d082869fmshd40b96058dbe32ep1c3ba6jsn5abd37a35253',
                      'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
          }
      
        }
        try{const response = await fetch(url,option)
          const data =await response.json()
         console.log(data)
         setstories(data)
         }
        catch(error){ 
          console.log(error)
        }}
useEffect(()=>{
  search()
},[user])
const items=stories?.data?.items
// console.log(items.video_url)
return (
    <div className='w-full  flex flex-col  items-center  text-red-600'> stories  {user&&stories&&stories.data&&stories.data.items? <div>
      
      
      {items.map(items=>(
       <div  key={items.id}>

       <div className='  flex justify-center bg-slate-400 gap-y-2'>
        <video crossOrigin='anonymous' src={ proxyUrl + items&& items.video_url} controls className='h-[600px] w-[400px]' ></video> <br />
        
        </div>
       </div>
      )
)}
  
      </div>:
     user&& <div >not stories</div>
    }
    </div>
  
  )
}

export default Stories
