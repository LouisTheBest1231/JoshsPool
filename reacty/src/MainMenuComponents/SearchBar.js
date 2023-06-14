
import {HiMagnifyingGlassCircle} from 'react-icons/hi2';
import {HiMagnifyingGlass} from 'react-icons/hi2';

export default function SearchBar(){
    return (
        <div className="SearchBar">
            <div className='SearchBarInput'>
                <HiMagnifyingGlass/>
                <input className='SearchBarInputBox' type='text'></input>
            </div>
            <div className='SearchBarTags'>Tags - - - - - - - - Tags ------ - - -- - -- - - -</div>
            
        </div>
    );
}