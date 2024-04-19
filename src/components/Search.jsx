import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {useDispatch} from "react-redux"
import { setdata,setpost } from '../app/dataslice';
function Search({
    className="",

}) {
const handelclick=()=>{
  console.log("click")
  console.log(query)
  search(query)
} 
const handelpress=(event)=>{
  if(event.key==="Enter"){
    search(query)
  }
}
const [query,setquery]=useState("")
const dispatch=useDispatch()
 const search = async(user)=>{
  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${user}`
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
   dispatch(setdata(data))
   }
  catch(error){
    console.log(error)
  }

setquery("")}
  



  return (
    <div className={`flex w-full py-4 px-2 ${className} md:justify-end`}>
      <input type="text"  onKeyPress={handelpress}  onChange={(e)=>setquery(e.target.value)}value={query} placeholder='username or userid_link 'className='rounded-xl indent-2 bg-transparent border-2 text-white'/> <span className='text-2xl text-white px-2 ' onClick={handelclick}>
        <AiOutlineSearch/></span>
    </div>
  )
}

export default Search
