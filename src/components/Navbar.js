import { useState } from "react";
import tranquility from "../assets/Tranquility.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [currentCategory, setCurrentCategory] = useState(false);

  const navCategories = [{ name: "home" }, { name: "members" }];

  return (
    <nav className="nav">
      <img src={tranquility} alt="free company logo" />
      <ul>
        {navCategories.map((category) => (
          <Link
            className={`navbar ${
              currentCategory.name === category.name ? "is-active" : ""
            }`}
            to={`/${category.name}`}
            onClick={() => setCurrentCategory(category)}
            key={category.name}
          >
            {category.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
