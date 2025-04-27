import { FaRegHeart } from "react-icons/fa6";
import { PiCirclesThree } from "react-icons/pi";
import { PiHandWaving } from "react-icons/pi";
import { PiCake } from "react-icons/pi";
import { RiCapsuleLine } from "react-icons/ri";
import { RiSignpostLine } from "react-icons/ri";
import { PiFlowerLight } from "react-icons/pi";
import { MdFamilyRestroom, MdKeyboardArrowDown } from "react-icons/md";
import CategoryBlock from "./CategoryBlock"
import { TbCup } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { TbBabyBottle } from "react-icons/tb";
import { GiWineGlass } from "react-icons/gi";
import { FaCalendarDay } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function AllCategories () {
    
    const person = [
        { icon: <FaRegHeart />, id: 1, categoryItem: "For You" },
        { icon: <PiCake />, id: 2, categoryItem: "Birthdays" },
        { icon: <RiCapsuleLine />, id: 3, categoryItem: "Fell Better" },
        { icon: <RiSignpostLine />, id: 4, categoryItem: "Life Milestones" },
        { icon: <PiFlowerLight />, id: 5, categoryItem: "I'm Sorry" },
        { icon: <MdFamilyRestroom />, id: 6, categoryItem: "For the Family" }
      ]
    const person2 = [
        { icon: <PiCirclesThree />, id: 1, categoryItem: "For the Team" },
        { icon: <PiHandWaving />, id: 2, categoryItem: "New Hire Welcome" },
      ]
    const person3 = [
        { icon: <TbCup />, id: 1, categoryItem: "Breakfast, Lunch & Dinner" },
        { icon: <GiCoffeeCup />, id: 2, categoryItem: "Keep 'em ceffeinated" },
        { icon: <TbBabyBottle />, id: 3, categoryItem: "Fine Wines" },
        { icon: <GiWineGlass />, id: 4, categoryItem: "Happy Hour" },
      ]
    const person4 = [
        { icon: <HiOutlineAcademicCap />, id: 1, categoryItem: "Back to school" },
        { icon: <FaCalendarDay/>, id: 2, categoryItem: "Labor Day Weekend" },
      ]

    return (
        <div>
            <div className="all-categories">
                <span style={{ fontSize: 20, marginLeft: 10, marginBottom:50 }}><b>All categories</b></span>
                <CategoryBlock categories={person} categoryName="PERSONAL"/>
                <CategoryBlock categories={person2} categoryName="TEAM"/>
                <CategoryBlock categories={person3} categoryName="FOOD & DRINK"/>
                <CategoryBlock categories={person4} categoryName="SEASONAL"/>
            </div>
            <div>
            </div>
        </div>
    )
}