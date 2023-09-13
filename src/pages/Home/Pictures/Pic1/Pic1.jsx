import React from "react";
import img1 from "./showcase-photo3.jpg";
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
            <h2 class="lg-heading text-black">Cricket</h2>
            <p class="text-gray">
              I started playing cricket when I was 5 years old ans it my
              favourite sport since then.Cicket is also the favoutite sport of
              the Pakistani nation.It is loved all across pakistan cause our
              team is very competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
