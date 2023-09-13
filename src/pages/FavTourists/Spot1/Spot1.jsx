import React from "react";
// import img1 from "./pxfuel.jpg"

const Pic1 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row1">
          <div class="img-box">
            {/* <img src={img1} alt="image" /> */}
            <iframe
              width="740"
              height="350"
              src="https://www.youtube.com/embed/BIitr_c6QuQ"
              title="16 Beautiful Places in Naran Kaghan Valley"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">Naran</h2>
            <p class="text-gray">
              Naran is a town and popular tourist destination in upper Kaghan
              Valley in the Mansehra District of the Khyber Pakhtunkhwa province
              of Pakistan. It is located 119 kilometers from Mansehra city at
              the altitude of 2,409 meters (7,904 ft).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
