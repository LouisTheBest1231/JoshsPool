// import { useEffect, useRef, useState } from 'react';
// import WaveSurfer from 'wavesurfer.js';
// import {FaPause, FaPlay} from 'react-icons/fa'
// import {AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai'

// //Importation manuelle des fichiers audio juste pour tester, on esseyera de mettre des sons dans le database eventuellement
// import audio from './localDummySounds/mixkit-aggressive-beast-roar-13.wav';
// import audio2 from './localDummySounds/mixkit-game-show-suspense-waiting-667.wav'
// import audio3 from './localDummySounds/mixkit-small-group-cheer-and-applause-518.wav'

// export default function WaveForm()
// {
//     const [playPauseButton, setPlayPauseButton] = useState("Play");
//     const [soundDuration, setSoundDuration] = useState('00:00');
//     const [soundCurrentTime, setSoundCurrentTime] = useState(0);
//     const wavesurfer = useRef();

//     function playPause()
//     {
//         if(wavesurfer.current.isPlaying())
//         {
//             wavesurfer.current.pause();
          
//         }
//         else
//         {
//             wavesurfer.current.play();
            
//         }
//     }


//     useEffect(()=>{
       
//         wavesurfer.current = WaveSurfer.create({
//             container:"#WaveForm",
//             waveColor: 'rgb(200, 0, 200)',
//             progressColor: 'rgb(100, 0, 100)',
//             barGap:1,
//             barRadius:400,
//             barWidth : 5,
//             url: audio3,
//         });
        
//         wavesurfer.current.setVolume(0.5);
        
//         wavesurfer.current.on('ready', (duration)=>{
//             let date = new Date(0);

//             var timeString1 = date.toISOString().substring(14,19);
//             setSoundCurrentTime(timeString1)

//             date.setSeconds(duration);
//             var timeString2 = date.toISOString().substring(14,19);
//             setSoundDuration(timeString2);


//         });

//         wavesurfer.current.on('interaction', ()=>{
//             wavesurfer.current.play();
//         });
//         wavesurfer.current.on('play', ()=>{
//             setPlayPauseButton("Pause");
//         });
//         wavesurfer.current.on('pause', ()=>{
//             setPlayPauseButton("Play");
//         });
//         wavesurfer.current.on('timeupdate', (currentTime)=>{
//             let date = new Date(0);
//             date.setSeconds(currentTime);
//             var timeString = date.toISOString().substring(14,19);
//             setSoundCurrentTime(timeString);
//         });
        
        
        

//         //Wow this is the cleanup callback of the useEffect hook, pretty cool, didn't know it was a thing
//         return ()=>{wavesurfer.current.destroy();}

//     }, []);

    

//     return (
//     <div>
//     <div id="WaveForm" className='WaveForm' ></div>
//     <button onClick={playPause}>{playPauseButton}</button>
//     <div>{soundCurrentTime} / {soundDuration}</div>
    
//     {playPauseButton === "Play" && <FaPlay size={40} onClick={playPause}></FaPlay>}
//     {playPauseButton === "Pause" && <FaPause size={40} onClick={playPause}></FaPause>}
//     {playPauseButton === "Play" && <AiFillPlayCircle size={40} onClick={playPause}></AiFillPlayCircle>}
//     {playPauseButton === "Pause" && <AiFillPauseCircle size={40} onClick={playPause}></AiFillPauseCircle>}
//     </div>);
// }