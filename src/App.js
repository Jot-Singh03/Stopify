import { useContext } from 'react';
import './App.css';
import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { PlayCon } from './context/Playcontext';

function App() {

  const {audioRef,track}=useContext(PlayCon);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.File} preload='auto'></audio>
    </div>
  );
}

export default App;
