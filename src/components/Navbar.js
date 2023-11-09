import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => (
  <main>
    <nav className="nav">
      <h2 className="header">Bookstore CMS</h2>
      <ul className="list">
        <li className="link">
          <Link to="/" className="nav-link item">
            Books
          </Link>
        </li>
        <li className="link">
          <Link to="/categories" className="nav-link item">
            Categories
          </Link>
        </li>
      </ul>

      <div className="nav-item">
        <FaUser className="icon" />
      </div>
    </nav>
  </main>
);

export default Navbar;
