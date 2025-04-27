import { MdKeyboardArrowDown } from "react-icons/md";
import { PiCirclesThree } from "react-icons/pi";
import { PiHandWaving } from "react-icons/pi";

export default function Team() {
  return (
    <div>
      <div className="personal-header">
        <span style={{ fontSize: 15, marginLeft: 10 }}>
          <b>Team</b>
        </span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="personal-center">
        <div className="personal-block">
          <span className="personal-item">
            <PiCirclesThree style={{ marginRight: 10 }} /> For the Team
          </span>
          <span className="personal-item">
            <PiHandWaving style={{ marginRight: 10 }} /> New Hire Welcome
          </span>
        </div>
      </div>
    </div>
  );
}
