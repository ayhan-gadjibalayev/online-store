import { FaRegHeart } from "react-icons/fa6";
import { PiCake } from "react-icons/pi";
import { RiCapsuleLine } from "react-icons/ri";
import { RiSignpostLine } from "react-icons/ri";
import { PiFlowerLight } from "react-icons/pi";
import { MdFamilyRestroom, MdKeyboardArrowDown } from "react-icons/md";

export default function Personal() {
  return (
    <div>
      <div className="personal-header">
        <span style={{ fontSize: 15, marginLeft: 10 }}>
          <b>PERSONAL</b>
        </span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="personal-block">
        <span className="personal-item">
          <FaRegHeart style={{ marginRight: 10 }} /> For You
        </span>
        <span className="personal-item">
          <PiCake style={{ marginRight: 10 }} /> Birthdays
        </span>
        <span className="personal-item">
          <RiCapsuleLine style={{ marginRight: 10 }} /> Fell Better
        </span>
        <span className="personal-item">
          <RiSignpostLine style={{ marginRight: 10 }} /> Life Milestones
        </span>
        <span className="personal-item">
          <PiFlowerLight style={{ marginRight: 10 }} /> I'm Sorry
        </span>
        <span className="personal-item">
          <MdFamilyRestroom style={{ marginRight: 10 }} /> For the Family
        </span>
      </div>
    </div>
  );
}
