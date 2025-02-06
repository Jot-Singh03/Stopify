import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const nav=useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
     <div className='flex items-center gap-2'>
     <img onClick={()=>nav(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src="/left_arrow.png" alt=''/> 
     <img onClick={()=>nav(+1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src="/right_arrow.png" alt=''/> 
     </div> 
     <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
        <a href="https://download.scdn.co/SpotifySetup.exe" download>
        <p className="bg-black py-1 px-3 rounded-xl text-[15px] cursor-pointer">
          Install App
        </p>
        </a>
        <img className='w-5 h-5'src="/bell.png" alt=''/>
        <p className='bg-purple-500 text-black w-11 h-11 rounded-full flex items-center justify-center'>B</p>
      </div>  
      </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white  text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music </p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts </p>
    </div>
    </>
  )
}

export default Nav
