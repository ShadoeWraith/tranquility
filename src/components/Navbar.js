import { useState } from "react";
import tranquility from "../assets/Tranquility.png";

export default function Navbar() {
  const [currentCategory, setCurrentCategory] = useState(false);

  const navCategories = [
    { name: "Home" },
    { name: "Meet us" },
    { name: "Contact" },
  ];

  return (
    <nav className="nav">
      <img src={tranquility} alt="free company logo" />
      <ul>
        {navCategories.map((category) => (
          <li
            className={`navbar ${
              currentCategory.name === category.name ? "is-active" : ""
            }`}
            key={category.name}
          >
            <a
              href={`#${category.name}`}
              onClick={() => setCurrentCategory(category)}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
