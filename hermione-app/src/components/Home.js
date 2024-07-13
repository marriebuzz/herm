import React from "react";
import { Link } from "react-router-dom";
import hermioneImage from "./hermione.jpg";

const Home = () => (
  <div>
    <h1>Hermione Granger</h1>
    <img src={hermioneImage} alt="Hermione Granger" />
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/fact/1">Fact 1</Link>
        </li>
        <li>
          <Link to="/fact/2">Fact 2</Link>
        </li>
        <li>
          <Link to="/fact/3">Fact 3</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Home;
