import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { Chart, Songs } from '../Assets/Assets'
import { useContext } from 'react'
import { PlayCon } from '../context/Playcontext'

const AlbumD = () => {
    const {id}=useParams()

    const Data= Chart[id]

    const{Playwid}=useContext(PlayCon)

  return (
    <>
      <Nav/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
    <img className='w-48 rounded' src={Data.image} alt=""/>
    <div className='flex flex-col'>
       <p>Playlist</p>
       <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{Data.Name}</h2>
       <h4>{Data.Desc}</h4>
       <p className='mt-1'>
        <img className="inline-block w-5" src="/spotify_logo.png" alt="" />
        <b>Spotify
        • ∞ likes
        • 13 songs,about 39 mins</b>
       </p>
    </div>
   </div>
   <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
     <p><b className='mr-4'>#</b>Title</p>
     <p>Album</p>
    
     <p className='hidden sm:block'>Date Added</p>
     <img className='m-auto w-4' src="/clock.png" alt=""/>
   </div>
   <hr/>
   {
    Songs.map((item,index)=>(
        <div onClick={()=>Playwid(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
         <p className='text-white'>
           <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
           <img className='inline w-10 mr-5' src={item.image} alt=''/>
           {item.Name}
         </p>
         <p className='text-[15px]'>{Data.Name}</p>
         <p  className='text-[15px] hidden sm:block'>5 days ago</p>
         <p className='text-[15px] text-center'>{item.Duration}</p>
        </div>
    ))
   }
    </>
  )
}

export default AlbumD
