import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/stream/movies">Movies</Link>
        </li>
        <li>
          <Link to="/stream/shows">Shows</Link>
        </li>
        <li className="navbar-title">
          <div>MagnetStream</div>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default Navbar;
