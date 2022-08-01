import tranquility from "../assets/Tranquility.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={tranquility} alt="free company logo" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/members">
          <li>Members</li>
        </Link>
      </ul>
    </nav>
  );
}
