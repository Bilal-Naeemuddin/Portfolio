import React from "react";
import Slide2 from "../../assets/img/carousal/slide2.png";

import "./mycomponent.style.css";

const MyCarousal = () => {
  return (
    <div id="home">
          <img className="d-block w-100 custom-img" src={Slide2} alt="slide2" />

    </div>
  );
};

export default MyCarousal;