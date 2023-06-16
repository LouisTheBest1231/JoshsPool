import LD from "../Images/LDDDDDD.jpg"
import "./InfoTab.css"

export default function InfoTab(){
    return (
        <div className="InfoTab">
            <h1>Our Goal</h1>
            <p>We seek to make finding the perfect sound effect for your project easier. 
                Our goal is to make good quality sound widely available to most people. We 
                hope our website will fulfill your needs. If you wish to have more information, go to the “About” tab. 
                Have fun!  
            </p>
            <img className="LD" src={LD}></img>
            
            <h1>Tags</h1>
            <p>Each sound effect is attributed “tags”. Tags are the components that can be heard in the sound effects. 
                Components such as the materials or the tools used to make the sound. So basically, the more tags a sound has, the more precise it will be. 
            </p>

            <h1>Uploading</h1>
            <p>If you have a sound effect that you would be interested in sharing with us and the community, feel free to go to our “Upload” tab to add your sound effects 
                to our database where anyone can enjoy it. Just make sure you put the correct tags so that people can find it easily.  
            </p>

            <h1>Discussions</h1>
            <p> We have forums for people to discuss about all things sound effects. If you have a request for sound effects you
                 would like us to add to the database, 
                 we will check on that and try to add on the briefest delays. It’s also a great place to exchange with other people about their projects. 

            </p>
            <p><br></br></p>
        </div>
    );
}
