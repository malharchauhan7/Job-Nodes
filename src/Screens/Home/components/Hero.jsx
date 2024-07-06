import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useNavigate } from 'react-router-dom'
function Hero() {
    const navigation = useNavigate();
    const{theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='my-10 flex flex-col items-center gap-5'>
        <h2 className='text-4xl font-bold text-center font-sans'>20 Essential Career Nodes Selected by Internet and You </h2>
        <h2 className='text-center my-3 text-lg'><strong className='text-secondary'>Upvote & Comment </strong>on the most valuable career tips. <a onClick={()=>{navigation('/new')}} className='text-secondary hover:cursor-pointer'>Share</a> your your insights without signing up!</h2>

        <div>
        <select onChange={(event)=>setTheme(event.target.value)}
        className="select select-bordered w-full max-w-xs border-primary">
            <option disabled selected >Select Theme you like</option>
            <option>light</option>
            <option>dark</option>
            <option>sunset</option>
            <option>corporate</option>
            <option>nord</option>
            <option>pastel</option>
            <option>cupcake</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>pastel</option>
            <option>black</option>
            <option>winter</option>
            <option>night</option>
            <option>dracula</option>
            <option>wireframe</option>
            <option>lofi</option>
            <option>cmyk</option>
            <option>fantasy</option>
            <option>autumn</option>
        </select>
        </div>
       
    </div>
    
  )
}

export default Hero