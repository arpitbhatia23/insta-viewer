import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
function Search({
    value ='',
    className="",

}) {
const handelclick=()=>{
  console.log("click")
  console.log(query)
  search(query)
} 
const [query,setquery]=useState("")

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
   }
  catch(error){
    console.log(error)
  }}
  



  return (
    <div className={`flex w-full py-4 px-2 ${className} md:justify-end`}>
      <input type="text"   onChange={(e)=>setquery(e.target.value)}value={query} className='rounded-xl indent-2'/> <span className='text-2xl text-white px-2 ' onClick={handelclick}>
        <AiOutlineSearch/></span>
    </div>
  )
}

export default Search
