import "./SearchAboutTab.css"
import {BsFillHouseDoorFill} from 'react-icons/bs';
import { IconContext } from "react-icons/lib";

export default function SearchAboutTab(){
    return (
        <div className="SearchAboutTab">
            <div className="SearchDiv">
                <input type="text" placeholder="Search" className="Search"></input>
            </div>
            <div className="AboutHome">
                <IconContext.Provider value={{color:"#4472C4", size:30}}>
                    <div>
                        <BsFillHouseDoorFill/>
                    </div>
                </IconContext.Provider>
               
                <button className="About">About</button>
            </div>
        </div>
    );
}