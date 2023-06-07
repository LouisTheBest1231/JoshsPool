import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';


//Importation manuelle des fichiers audio juste pour tester, on esseyera de mettre des sons dans le database eventuellement
import audio from './localDummySounds/mixkit-aggressive-beast-roar-13.wav';
import audio2 from './localDummySounds/mixkit-game-show-suspense-waiting-667.wav'
import audio3 from './localDummySounds/mixkit-small-group-cheer-and-applause-518.wav'

export default function WaveForm()
{
    const waveformRef = useRef();

    useEffect(()=>{
       
        const wavesurfer = WaveSurfer.create({
            container:waveformRef.current,
            waveColor: 'rgb(200, 0, 200)',
            progressColor: 'rgb(100, 0, 100)',
            barGap:1,
            barRadius:400,
            barWidth : 5,
            url: audio3,
        });
        
        wavesurfer.setVolume(0.05);
        
        wavesurfer.on('interaction', ()=>{
            wavesurfer.play();
            console.log("ayo?>")
        });
        

        //Wow this is the cleanup callback of the useEffect hook, pretty cool, didn't know it was a thing
        return ()=>{wavesurfer.destroy();}

    }, []);

    return (
    <div ref={waveformRef} className='WaveForm' >
        
    </div>);
}