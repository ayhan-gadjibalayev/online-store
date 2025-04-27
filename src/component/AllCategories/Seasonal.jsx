import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaCalendarDay } from "react-icons/fa";

export default function Seasonal() {
  return (
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
        <span className="personal-item">
          <HiOutlineAcademicCap style={{ marginRight: 10 }} />
          Back to School
        </span>
        <span className="personal-item">
          <FaCalendarDay style={{ marginRight: 10 }} /> Labor Day Weekend
        </span>
      </div>
    </div>
  );
}
