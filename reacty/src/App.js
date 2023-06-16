import SiteName from "./MainMenuComponents2/SiteName";
import SearchAboutTab from "./MainMenuComponents2/SearchAboutTab";
import NavTab from "./MainMenuComponents2/NavTab"
import InfoTab from "./MainMenuComponents2/InfoTab"

function App() {
  return (
    <div className="container">
      <div className="FIXED">
        <div><SiteName/></div>
        <div><SearchAboutTab/></div>
        <div> <NavTab/></div>
      </div>
      
      <div><InfoTab/></div>
      
    </div>
  );
}

export default App;
