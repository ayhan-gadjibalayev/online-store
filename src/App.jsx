import "./App.css";
import "./component/AllCategories/Allcategories.css"
import Team from "./component/AllCategories/Team.jsx"
import Personal from "./component/AllCategories/Personal.jsx"
import FoodDrink from "./component/AllCategories/FoodDrink.jsx"
import Seasonal from "./component/AllCategories/Seasonal.jsx"

function App() {
  return (
    <div className="general-div">
      <div className="all-categories">
        <span style={{ fontSize: 20, marginLeft: 10 }}><b>All categories</b></span>
      <Personal/>
      <Team/>
      <FoodDrink/>
      <Seasonal/>
      </div>
      <div className="right-block">
        <div className="sorts"></div>
        <div className="best-selling"></div>
        <div className="most-popular"></div>
      </div>
    </div>
  );
}

export default App;
