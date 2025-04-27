import "./App.css";
import AllCategories from "./component/AllCategories/Allcategories";
import "./component/AllCategories/Allcategories.css"

function App() {
  return (
    <div className="general-div">
      <AllCategories/>
      <div className="right-block">
        <div className="sorts"></div>
        <div className="best-selling"></div>
        <div className="most-popular"></div>
      </div>
    </div>
  );
}

export default App;
