import React from "react";
import UserReviews from "./UserReviews";

import Rphoto1 from "../img/user-1.jpg";
import Rphoto2 from "../img/user-4.jpg";
import Rphoto3 from "../img/user-5.jpg";
import Rphoto4 from "../img/user-6.jpg";

const Detail = () => {
  return (
    <div className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Animi nisi
          dignissimos debitis ratione sapiente saepe.Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
          <li className="list__item">Close to the Beach</li>
          <li className="list__item">Breakfast included</li>
          <li className="list__item">Free airport shuttle</li>
          <li className="list__item">Free wifi in all roms</li>
          <li className="list__item">Air conditioning and heating</li>
          <li className="list__item">Pets allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for all ages</li>
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel
          </p>
          <div className="recommend__friends">
            <img src={Rphoto4} alt="Freind 1" className="recommend__photo" />
            <img src={Rphoto2} alt="Freind 2" className="recommend__photo" />
            <img src={Rphoto3} alt="Freind 3" className="recommend__photo" />
            <img src={Rphoto1} alt="Freind 3" className="recommend__photo" />
          </div>
        </div>
      </div>
      <UserReviews />
    </div>
  );
};

export default Detail;
