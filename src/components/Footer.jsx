import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="mynavbar container-lg">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <Link to="/" class="text-light-emphasis col-md-4 mb-0 text-body-secondary">
          © 2023 Federal Direct
        </Link>

        <Link
          to="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            image
          </svg>
        </Link>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link to="/" class="text-light-emphasis nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="text-light-emphasis nav-link px-2 text-body-secondary">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/services" class="text-light-emphasis nav-link px-2 text-body-secondary">
              Services
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="text-light-emphasis nav-link px-2 text-body-secondary">
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
