import { MdKeyboardArrowDown } from "react-icons/md";
import { TbCup } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { TbBabyBottle } from "react-icons/tb";
import { GiWineGlass } from "react-icons/gi";

export default function FoodDrink() {
  return (
    <div>
      <div className="personal-header">
        <span style={{ fontSize: 15, marginLeft: 10 }}>
          <b>FOOD & DRINK</b>
        </span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="personal-center">
        <span className="personal-item">
          <TbCup style={{ marginRight: 10 }} />
          Breakfast, Lunch & Dinner
        </span>
        <span className="personal-item">
          <GiCoffeeCup style={{ marginRight: 10 }} />
          Keep 'em ceffeinated
        </span>
        <span className="personal-item">
          <TbBabyBottle style={{ marginRight: 10 }} />
          Fine Wines
        </span>
        <span className="personal-item">
          <GiWineGlass style={{ marginRight: 10 }} />
          Happy Hour
        </span>
      </div>
    </div>
  );
}
