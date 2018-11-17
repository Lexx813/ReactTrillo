import React from "react";
import userP from "../img/user-1.jpg";
import userP1 from "../img/user-4.jpg";

const UserReviews = () => {
  return (
    <div className="user-reviews">
      <figure className="review">
        <blockquote className="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga
          doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption className="review__user">
          <img src={userP} alt="" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">Nick Smith</p>
            <p className="review__user-date">Nov 16, 2018</p>
          </div>
          <div className="review__rating">7.8</div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga
          doloremque architecto dicta animi.
        </blockquote>
        <figcaption className="review__user">
          <img src={userP1} alt="" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-nam">Rick Scott </p>
            <p className="review__user-date">Sept 5, 2018</p>
          </div>
          <div className="review__rating">7.8</div>
        </figcaption>
      </figure>
      <button className="btn-inline">
        Show all
        <span>&rarr;</span>
      </button>
    </div>
  );
};

export default UserReviews;
