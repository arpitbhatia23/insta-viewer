import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
function Search({
    
    className="",

}) {
  return (
    <div className={`flex w-full py-4 px-2 ${className} md:justify-end`}>
      <input type="text"  className='rounded-xl'/> <span className='text-2xl text-white px-2'><AiOutlineSearch/></span>
    </div>
  )
}

export default Search
