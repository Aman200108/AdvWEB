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
            <h2 class="lg-heading text-black">Murree</h2>
            <p class="text-gray">
              Murree is a mountain resort city. It forms the outskirts of the
              Islamabad-Rawalpindi metropolitan area, and is about 30 km
              northeast of Islamabad. It has average altitude of 2,291 metres.
              The British built this town during their rule to escape the
              scorching heat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic2;
