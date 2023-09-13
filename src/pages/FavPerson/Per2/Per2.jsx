import React from "react";
import img1 from "./wallpaperflare.com_wallpaper.jpg";
import { NavLink } from "react-router-dom";
const Pic2 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row2">
          <div class="img-box">
            <img src={img1} alt="Image Description" />
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">CR 7</h2>
            <p class="text-gray">
              Ronaldo was born on February 5, 1985 and was named Ronaldo after
              the then US President Ronald Reagan. He grew up in a poor family
              and had to share a bedroom and bathroom with his older brother and
              two older sisters. He started playing soccer at an early age when
              he was just eight
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic2;
