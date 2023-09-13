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
            <h2 class="lg-heading text-black">Quaid</h2>
            <p class="text-gray">
              Muhammad Ali Jinnah born 25 Dec 1876 was a barrister, politician
              and the founder of Pakistan. Jinnah served as the leader of the
              All-India Muslim League from 1913 until the inception of Pakistan
              on 14 August 1947, and then as Pakistan's first governor-general.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
