import React from "react";
import img1 from "./showcase-photo1.jpg";

const Pic2 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row2">
          <div class="img-box">
            <img src={img1} alt="Image Description" />
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">Singing</h2>
            <p class="text-gray">
              I love sinigng very much since my child hood.I started listening
              to music since I was very young then I started developing interest
              in singing as well.I have full belief in myself and I am sure that
              I will become a good singer one day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic2;
