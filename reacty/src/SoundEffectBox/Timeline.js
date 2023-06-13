import { useState } from "react";
import WaveSurf from "./WaveSurf";
import {AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai'
/*************
** Class of the play/pause button && the timer && the wave pattern
**
************/ 
export default function Timeline({audioSource})
{
    const [playButtonState, setPlayButtonState] = useState("Play");
    const [soundCurrentTime, setSoundCurrentTime] =useState("00:00");
    const [soundTotalDuration, setSoundTotalDuration] = useState("00:00");
    
    //Triggers the wavesurf function 
    const [playPauseTrigger, setPlayPauseTrigger] = useState(0);
   
    function playPauseFunction()
    {
        setPlayPauseTrigger((playPauseTrigger+1));
        
       
    }

    return (
        <div className="Timeline">
            {playButtonState === "Play" && <AiFillPlayCircle size={40} onClick={playPauseFunction}></AiFillPlayCircle>}
            {playButtonState === "Pause" && <AiFillPauseCircle size={40} onClick={playPauseFunction}></AiFillPauseCircle>}
            <div className="TimeSurf">
                <WaveSurf audioSource={audioSource} setPlayButtonState={setPlayButtonState} setSoundCurrentTime={setSoundCurrentTime} 
                    setSoundTotalDuration={setSoundTotalDuration} playPauseTrigger={playPauseTrigger}/>

                <div>{soundCurrentTime} / {soundTotalDuration}</div>
            </div>
            
        </div>
        

    );
}