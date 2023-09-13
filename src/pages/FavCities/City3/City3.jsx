import React from "react";
import img1 from "./peakpx.jpg";

const Pic1 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row1">
          <div class="img-box">
            <img src={img1} alt="image" />
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">Islamabad</h2>
            <p class="text-gray">
              Islamabad is the capital city of Pakistan. It is the country's
              ninth-most populous city, with a population of over 1.2 million
              people, and is federally administered by the Pakistani government
              as part of the Islamabad Capital Territory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
