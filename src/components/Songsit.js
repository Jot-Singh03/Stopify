import React, { useContext } from 'react'
import { PlayCon } from '../context/Playcontext'

const Songsit = ({image,Name,Desc,id}) => {

    const{Playwid}=useContext(PlayCon)

    return (
      <div onClick={()=>Playwid(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
       <img  className="rounded" src={image} alt=''/>
       <p className='font-bold mt-2 mb-1'>{Name}</p>
       <p className='text-slate-200 text-sm'>{Desc}</p>
      </div>
    )
  }
  

export default Songsit
