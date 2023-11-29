import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="sticky-top mynavbar container-lg border-bottom border-light">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-2 ">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="titlefont fs-4 text-light">
            Baron Insurance Agency & Tax Consultant
          </span>
        </Link>

        <ul className=" nav gap-2 nav-pills">
          <li className="nav-item">
            <Link to="/"aria-current="page">
              <button className="btn btn-outline-light" >Home</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" >
            <button className=" btn btn-outline-primary" >About Us</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/industrylinks">
            <button className=" btn btn-outline-primary" >Industry Links</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services">
            <button className=" btn btn-outline-primary" >Services</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"  aria-current="page">
            <button className="btn btn-outline-warning" >Contact Us</button>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;