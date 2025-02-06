import React from 'react'
import Nav from './Nav'
import { Chart, Songs } from '../Assets/Assets'
import Albumit from './Albumit'
import Songsit from './Songsit'

const DisplayH = () => {
  return (
    <>
     <Nav/> 
     <div className='my-4'>
     <h1 className='my-5 font-bold text-2xl'>TRENDING CHARTS</h1>
     <div className='flex overflow-auto'>
          {Chart.map((item,index)=>(<Albumit key={index} Desc={item.Desc} Name={item.Name} id={item.id} image={item.image}/>))}
     </div>
     </div>
     
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>TRENDING NOW</h1>
      <div className='flex overflow-auto'> 
      {Songs.map((item,index)=>(<Songsit key={index} Name={item.Name} Desc={item.Desc.slice(0,25)} id={item.id} image={item.image}/>))}
      </div>
      </div>
    </>
  )
}

export default DisplayH
