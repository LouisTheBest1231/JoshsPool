import Timeline from "./Timeline";
import audio3 from '../localDummySounds/mixkit-small-group-cheer-and-applause-518.wav'
import "./SoundEffectBox.css"
export default function CompleteSoundEffectBox({Title})
{
    return (
        <div className="SoundEffectBox">
          <div className="Title">{Title}</div>
          <Timeline audioSource={audio3}/>
          
        </div>
    );
}