import "./App.css";
import { FaRegHeart } from "react-icons/fa6";
import { PiCake } from "react-icons/pi";
import { RiCapsuleLine } from "react-icons/ri";
import { RiSignpostLine } from "react-icons/ri";
import { PiFlowerLight } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiCirclesThree } from "react-icons/pi";
import { PiHandWaving } from "react-icons/pi";
import { TbCup } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { TbBabyBottle } from "react-icons/tb";
import { GiWineGlass } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaCalendarDay } from "react-icons/fa";

function App() {
  return (
    <div className="general-div">
      <div className="all-categories">
        <span style={{ fontSize: 20, marginLeft: 10 }}><b>All categories</b></span>
        <div className="personal-header">
          <span style={{ fontSize: 15, marginLeft: 10 }}>
            <b>PERSONAL</b>
          </span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div className="personal-block">
          <span className="personal123">
            <FaRegHeart style={{marginRight:10}}/> For You
          </span>
          <span className="personal123">
            <PiCake style={{marginRight:10}}/> Birthdays
          </span>
          <span className="personal123">
            <RiCapsuleLine style={{marginRight:10}}/> Fell Better
          </span>
          <span className="personal123">
            <RiSignpostLine style={{marginRight:10}}/> Life Milestones
          </span>
          <span className="personal123">
            <PiFlowerLight style={{marginRight:10}}/> I'm Sorry
          </span>
          <span className="personal123">
            <MdFamilyRestroom style={{marginRight:10}}/> For the Family
          </span>
        </div>

        <div className="personal-header">
          <span style={{ fontSize: 15, marginLeft: 10 }}>
            <b>TEAM</b>
          </span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div className="personal-center">
          <div className="personal-block">
            <span className="personal123">
              <PiCirclesThree style={{marginRight:10}}/> For the Team
            </span>
            <span className="personal123">
              <PiHandWaving style={{marginRight:10}}/> New Hire Welcome
            </span>
          </div>
        </div>
        <div className="personal-header">
          <span style={{ fontSize: 15, marginLeft: 10 }}>
            <b>FOOD & DRINK</b>
          </span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div className="personal-center">
          <span className="personal123">
            <TbCup style={{marginRight:10}}/>
            Breakfast, Lunch & Dinner
          </span>
          <span className="personal123">
            <GiCoffeeCup style={{marginRight:10}}/>
            Keep 'em ceffeinated
          </span>
          <span className="personal123">
            <TbBabyBottle style={{marginRight:10}}/>
            Fine Wines
          </span>
          <span className="personal123">
            <GiWineGlass style={{marginRight:10}}/>
            Happy Hour
          </span>
        </div>
        <div className="seasonal">
          <div className="personal-header">
            <span style={{ fontSize: 15, marginLeft: 10 }}>
              <b>SEASONAL</b>
            </span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          <div className="personal-center">
            <span className="personal123"><HiOutlineAcademicCap style={{marginRight:10}}/>Back to School</span>
            <span className="personal123">< FaCalendarDay style={{marginRight:10}}/> Labor Day Weekend</span>
          </div>
        </div>
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
