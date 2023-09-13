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
            <h2 class="lg-heading text-black">Lahore</h2>
            <p class="text-gray">
              Lahore is the second largest city in Pakistan after Karachi and
              26th largest in the world, with a population of over 13 million.
              It is situated in the north-east of the country with River Ravi
              flowing north-west of the city. It is the capital of the province
              of Punjab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
