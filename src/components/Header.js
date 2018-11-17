import React from "react";
import Logo from "../img/logo.png";
import SVG from "../img/sprite.svg";
import User from "../img/user.jpg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Trillo logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${SVG}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${SVG}#icon-bookmark`} />
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${SVG}#icon-chat`} />
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={User} alt="user " className="user-nav__user-photo" />
          <span className="user-nav__name">Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
