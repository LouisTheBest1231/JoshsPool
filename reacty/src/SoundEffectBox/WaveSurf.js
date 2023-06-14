import { useEffect,useRef } from "react";
import WaveSurfer from 'wavesurfer.js';


/*************
** Class of the visual of the wave pattern
**
************/ 

export default function WaveSurf({audioSource, setSoundCurrentTime, setSoundTotalDuration, setPlayButtonState, playPauseTrigger, containerName})
{
    const wavesurfer = useRef();


    function playPauseFunction()
    {
        if(wavesurfer.current.isPlaying())
        {
            wavesurfer.current.pause();
        }
        else
        {
            wavesurfer.current.play();
        }
    }

    useEffect(()=>{
        wavesurfer.current = WaveSurfer.create({
            container : "#" + containerName,
            waveColor: 'rgb(145, 192, 238)',
            progressColor: 'rgb(0,0,0)',
            barGap:1,
            barRadius:400,
            barWidth : 5,
            
            url:audioSource
        });
       

        wavesurfer.current.on('ready', (duration)=>{
            let date = new Date(0);
            let timeString1 = date.toISOString().substring(14,19);
            setSoundCurrentTime(timeString1);

            date.setSeconds(duration);
            let timeString2 = date.toISOString().substring(14,19);
            setSoundTotalDuration(timeString2);
        });


        wavesurfer.current.on('interaction', ()=>{
            wavesurfer.current.play();
        });
        wavesurfer.current.on('play', ()=>{
            setPlayButtonState("Pause");
        });
        wavesurfer.current.on('pause', ()=>{
            setPlayButtonState("Play");
        });
        wavesurfer.current.on('timeupdate', (currentTime)=>{
            let date = new Date(0);
            date.setSeconds(currentTime);
            let timeString = date.toISOString().substring(14,19);
            setSoundCurrentTime(timeString);
        });


        return()=>{wavesurfer.current.destroy();}
    },[]);


    useEffect(()=>{
        if(playPauseTrigger){
            playPauseFunction();
        }
       
       
    }, [playPauseTrigger]);

    return (
        <div id={containerName} className="WaveSurf">
        </div>
    );
}