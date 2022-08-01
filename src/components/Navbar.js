import tranquility from "../assets/Tranquility.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={tranquility} alt="free company logo" />
      <ul>
        <a href="/tranquility/">
          <li>Home</li>
        </a>
        <a href="/tranquility/members">
          <li>Members</li>
        </a>
      </ul>
    </nav>
  );
}
