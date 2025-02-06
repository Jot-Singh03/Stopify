import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayH from './DisplayH'
import AlbumD from './AlbumD'
import { Chart } from '../Assets/Assets'

const Display = () => {

      const displayRef=useRef();
      const loc=useLocation();
      const isAlbum=loc.pathname.includes("album");

      const albumId=isAlbum ? loc.pathname.slice(-1):"";
      const bgColor= Chart[Number(albumId)].bgColor;

      useEffect(()=>{
        if(isAlbum){
          displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
        }
        else{
          displayRef.current.style.background=`#121212`

        }
      })

  return (
    <div ref={displayRef} className='w-[100] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayH/>} />
        <Route path='/album/:id' element={<AlbumD/>} />

      </Routes>
    </div>
  )
}

export default Display
