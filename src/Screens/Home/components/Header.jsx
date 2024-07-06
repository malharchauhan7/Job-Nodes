import React from 'react'
import mypic from './../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
function Header() {
  
  const navigation = useNavigate();
  
 
 
  return (
    <div className='flex justify-between items-center shadow-lg p-4 border rounded-lg border-transparent' >
        <button className='btn btn-primary btn-sm md:btn-md ' onClick={()=>navigation('/new')}>+New idea</button>
        <h2 className='font-bold text-sm md:text-2xl text-primary hover:cursor-pointer' onClick={()=>navigation('/')}>Job Nodes</h2>
        <div className='flex gap-2 items-center'>
           <img src={mypic} className="w-10 h-10 rounded-full" /> 
            <h2 className='font-bold text-sm hidden md:block'>By <br /> <a href="https://www.linkedin.com/in/malhar-chauhan-539100238/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-primary font-bold' target='_blank'>Malhar</a></h2>
        </div>
    </div>
  )
}

export default Header