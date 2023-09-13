import React from "react";
import img1 from "./pxfuel.jpg";
import { NavLink } from "react-router-dom";
const Pic1 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row1">
          <div class="img-box">
            <img src={img1} alt="image" />
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">Imran Khan</h2>
            <p class="text-gray">
              Imran Ahmad Khan Niazi born 5 October 1952 is a Pakistani former
              cricketer and politician who served as the 22nd prime minister of
              Pakistan from August 2018 until April 2022. He is the founder and
              chairman of the political party Pakistan Tehreek-e-Insaf (PTI)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
