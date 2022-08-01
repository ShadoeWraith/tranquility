import tranquility from "../assets/Tranquility.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={tranquility} alt="free company logo" />
      <ul>
        <Link to="/tranquility/">
          <li>Home</li>
        </Link>
        <Link to="/tranquility/members">
          <li>Members</li>
        </Link>
      </ul>
    </nav>
  );
}
