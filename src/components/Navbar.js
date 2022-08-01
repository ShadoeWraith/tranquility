import tranquility from "../assets/Tranquility.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={tranquility} alt="free company logo" />
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/members">
          <li>Members</li>
        </a>
      </ul>
    </nav>
  );
}
