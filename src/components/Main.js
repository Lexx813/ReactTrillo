import React from "react";
import Gphoto1 from "../img/hotel-1.jpg";
import Gphoto2 from "../img/hotel-2.jpg";
import Gphoto3 from "../img/hotel-3.jpg";
import SVG from "../img/sprite.svg";

import Detail from "./Detail";
import CallToAction from "./CTA";

const Main = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={Gphoto1} alt="gallery p" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={Gphoto2} alt="gallery p" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={Gphoto3} alt="gallery p" className="gallery__photo" />
        </figure>
      </div>
      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars">
          <svg className="overview__icon-star">
            <use xlinkHref={`${SVG}#icon-star`} />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${SVG}#icon-star`} />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${SVG}#icon-star`} />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${SVG}#icon-star`} />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${SVG}#icon-star`} />
          </svg>
        </div>
        <div className="overview__location">
          <svg className="overview__icon-location">
            <use xlinkHref={`${SVG}#icon-location-pin`} />
          </svg>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count"> 429 votes</div>
        </div>
      </div>
      <Detail />
      <CallToAction />
    </main>
  );
};

export default Main;
