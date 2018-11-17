import React from "react";
import SVG from "../img/sprite.svg";

const Nav = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="/" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${SVG}#icon-home`} />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="/" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${SVG}#icon-aircraft-take-off`} />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="/" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${SVG}#icon-key`} />
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="/" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${SVG}#icon-map`} />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2018 by trillo. All rights reserved</div>
    </nav>
  );
};

export default Nav;
