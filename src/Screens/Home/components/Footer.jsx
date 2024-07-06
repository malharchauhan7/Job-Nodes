import { InstagramIcon, Linkedin, Twitter, TwitterIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { useEffect, useState } from 'react'

function Footer() {
    
    const navigation=useNavigate();
//onClick={()=>{navigation('/new')}}
  return (
    
    <div>
        
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div>
        <footer className="footer text-neutral-content p-10 flex justify-between">
    <nav>
      <h6 className="footer-title">DISCOVER</h6>
      <a className="text-gray-600 hover:cursor-pointer hover:text-primary"  onClick={()=>{navigation('/#hot')}}>Hot tips</a>
      <a className=" text-gray-600 hover:cursor-pointer hover:text-primary" onClick={()=>{navigation('/#new')}}>New tips</a>
      <a className=" text-gray-600 hover:cursor-pointer hover:text-primary" onClick={()=>{navigation('/#top')}}>Top Nodes for you</a>
      
    </nav>
    <nav>
      <h6 className="footer-title">ENGAGE</h6>
      <a className="text-gray-600 hover:cursor-pointer hover:text-primary" onClick={()=>{navigation('/new')}}>Add Node</a>
      
    </nav>
    <nav>
      <h6 className="footer-title">Socials</h6>
     <div className='flex flex-row gap-10 hover:cursor-pointer'> 
        <a href="https://www.linkedin.com/in/malhar-chauhan-539100238/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><Linkedin className='h-6 w-6  hover:text-primary text-gray-500'/></a>
     <a href="https://x.com/Malhar_7"  target='_blank'> <TwitterIcon className='h-6 w-6  hover:text-primary text-gray-500'/></a></div>
    </nav>
  </footer></div>
  
  </div>
  )
}

export default Footer