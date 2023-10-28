import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2 className="header">Bookstore</h2>
      <ul className="list">
        <li className="list-item">
          <Link to="/">Books</Link>
        </li>
        <li className="list-item">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
