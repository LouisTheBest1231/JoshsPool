
import CompleteSoundEffectBox from '../SoundEffectBox/CompleteSoundEffectBox'

export default function SoundLayout(){
    return (
        <div className="SoundLayout">
            <CompleteSoundEffectBox Title="Sound Effect 1" containerName="s1"/>
            <CompleteSoundEffectBox Title="Sound Effect 2" containerName="s2"/>
            <CompleteSoundEffectBox Title="Sound Effect 3" containerName="s3"/>
            <CompleteSoundEffectBox Title="Sound Effect 4" containerName="s4"/>
        </div>
    );
}