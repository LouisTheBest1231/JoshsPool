import NavigationBar from "./MainMenuComponents/NavigationBar";
import SearchBar from "./MainMenuComponents/SearchBar";
import SoundLayout from "./MainMenuComponents/SoundLayout";



function App() {
  return (
    <div className="container">
      <div className="BrowseTab"><NavigationBar name="Browse Sound Effects"/></div>
      <div className="AboutTab"><NavigationBar name="About"/></div>
      <div className="SearchTab"><SearchBar/></div>
      <div className="SoundEffectContent">
        <SoundLayout/>
        
      </div>
      
      
    </div>
  );
}

export default App;
