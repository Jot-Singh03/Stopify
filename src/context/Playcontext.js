    import { createContext, useEffect, useRef, useState } from "react";
    import { Songs } from "../Assets/Assets";

    export const PlayCon = createContext();

    const PlayConProvider=(props)=>{

        const audioRef=useRef();
        const seekBg=useRef();
        const seekBar=useRef();

        const [track,settrack]=useState(Songs[5]);
        const [playStatus,setPlaystatus]=useState(false);
        const [time,setTime]=useState({
            currentTime:{
                second:0,
                minute:0
            },
            totalTime:{
                second:0,
                minute:0
            }
        })

        const play=()=>{
            audioRef.current.play();
            setPlaystatus(true) 
        } 
        const pause=()=>{
            audioRef.current.pause();
            setPlaystatus(false) 
        } 

        const Playwid= async(id)=>{
            await settrack(Songs[id]);
            await audioRef.current.play();
            setPlaystatus(true);
        }   

        const previous= async(id)=>{
            if(track.id>0){
                await settrack(Songs[track.id-1])
                await audioRef.current.play()
                setPlaystatus(true);
            }
        }

        const next= async(id)=>{
            if(track.id< Songs.length-1){
                await settrack(Songs[track.id+1])
                await audioRef.current.play()
                setPlaystatus(true);
            }
        }

        const seekSong= async(e)=>{
            audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth*audioRef.current.duration))

        }

        
    

        useEffect(()=>{
            setTimeout(() => {
                
                audioRef.current.ontimeupdate=()=>{
                    seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"

                    setTime({ 
                        currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
                }
            }, 1000);
        },[audioRef])


        //VOLUME CONTROL 

        const [volume, setVolume] = useState(1); // Default volume is 1 (100%)
        const [isMuted, setIsMuted] = useState(false); // Default is not muted

        const handleVolumeChange = (e) => {
            const newVolume = e.target.value;
            setVolume(newVolume);
            if (!isMuted) {
            audioRef.current.volume = newVolume;
            }
        }

        const toggleMute = () => {
            if (isMuted) {
            setIsMuted(false);
            audioRef.current.volume = volume; // Restore previous volume
            } else {
            setIsMuted(true);
            audioRef.current.volume = 0; // Mute the audio
            }
        };

        const toggleFullScreen = () => {
            // Check if the browser is already in fullscreen mode
            if (!document.fullscreenElement &&    // If not in fullscreen
              !document.webkitFullscreenElement && // For Safari
              !document.mozFullScreenElement &&    // For Firefox
              !document.msFullscreenElement) {    // For IE/Edge
          
              // If not in fullscreen, go to full screen
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.webkitRequestFullscreen) { // Safari
                document.documentElement.webkitRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
              }
            } else {
              // If in fullscreen, exit fullscreen
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
              } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
              } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
              }
            }
          };
          
        const conVal={
            audioRef,
            seekBar,
            seekBg,
            track,
            settrack,
            playStatus,
            setPlaystatus,
            time,
            setTime,
            play,
            pause,
            Playwid,
            previous,
            next,
            seekSong, 
            volume,
            handleVolumeChange,
            isMuted,
            toggleMute,
            toggleFullScreen
            
        }

        return(
            <PlayCon.Provider value={conVal}>
                {props.children}
            </PlayCon.Provider>
        )
    }

    export default PlayConProvider;