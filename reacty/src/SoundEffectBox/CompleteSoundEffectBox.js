import Timeline from "./Timeline";
import audio3 from '../localDummySounds/mixkit-small-group-cheer-and-applause-518.wav'
import "./SoundEffectBox.css"
import { useEffect } from "react";
export default function CompleteSoundEffectBox({Title, containerName})
{


    return (
        <div className="SoundEffectBox">
          <div className="Title">{Title}</div>
          <Timeline audioSource={audio3} containerName={containerName}/>
          
        </div>
    );
}