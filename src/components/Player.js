import React, { useContext } from 'react'
import { PlayCon } from '../context/Playcontext';
const Player = () => {

  const{track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong,volume,handleVolumeChange,isMuted,toggleMute,toggleFullScreen}=useContext(PlayCon);
  
  return(
  <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
  <div className="hidden lg:flex item-center gap-4">
    <img className="w-12" src={track.image} alt="" />
    <div>
      <p>{track.Name}</p>
      <p>{track.Desc.slice(0, 13)}</p>
    </div>
  </div>
  <div className="flex flex-col items-center gap-1 m-auto">
    <div className="flex gap-4">
      <img className="w-4 cursor-pointer" src="/shuffle.png" alt=""/>
      <img onClick={previous} className="w-4 cursonr-pointer" src="/prev.png" alt=""/>
      {playStatus?
      <img onClick={pause} className="w-4 cursor-pointer" src="/pause.png" alt=""/>
      :
      <img onClick={play} className="w-4 cursor-pointer" src="/play.png" alt=""/>
      }   
      <img onClick={next} className="w-4 cursor-pointer" src="/next.png" alt=""/>
      <img className="w-4 cursor-pointer" src="/loop.png" alt=""/>
    </div>
    <div className="flex items-center gap-4"> 
      <p>{time.currentTime.minute}:{time.currentTime.second}</p>
      <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
       <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full"/>
      </div>
      <p>{time.totalTime.minute}:{time.totalTime.second}</p>
    </div>
  </div>
  <div className="hidden lg:flex pt-5 items-center gap-2 opacity-75">
     <img  className="w-4" src="/now-play.png" alt=""/>
     <img  className="w-4" src="/mic.png" alt=""/>
     <img  className="w-4" src="/queue.png" alt=""/>
     <img  className="w-4" src="/speaker.png" alt=""/>
     
        {/* Volume Control */}
        <img
          onClick={toggleMute}
          className="w-4 cursor-pointer"
          src={isMuted ? "/mute.png" : "/volume.png"}
          alt="volume"
        />

        {/* Volume Slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 bg-green-800 h-1 rounded"
        />



     <img  className="w-4" src="/mini-player.png" alt=""/>
     <img  onClick={toggleFullScreen} className="w-4" src="/zoom.png" alt=""/>
  </div>
</div>
);
};
export default Player
