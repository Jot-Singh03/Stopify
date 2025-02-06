import React from 'react'
import './styl.css'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const nav=useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex-col justify-around'>
        <div onClick={()=>nav('/')} className='flex items-center gap-3 pl-8 mt-4 cursor-pointer'>
        <i className="fa-solid fa-house icn"></i>
        <p className='font-bold'>Home</p>
        </div>

        <div className='mt-5 flex items-center gap-3 pl-8 cursor-pointer'>
        <i className="fa-solid fa-magnifying-glass icn"></i>  
        <p className='font-bold'>Search</p>
        </div>

        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='mt-7 p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
            <img className='w-8' src="/stack.png" alt=''/>
              <p className='font-bold'>Your Library</p>
            </div>
            <div className='flex item-center gap-3'>
              <i className="fa-solid fa-arrow-right w-5"></i>
              <i className="fa-solid fa-plus w-5"></i>
            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create Your PlayList</h1>
            <p>We are here to help You</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
            <h1>Podcasts</h1>
            <p>We are here to help you to find podcasts and notify for their episodes </p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar