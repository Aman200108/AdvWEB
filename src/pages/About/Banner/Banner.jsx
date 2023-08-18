import React from "react";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div class="cta-banner">
      <div class="cta-banner-left">
        <p class="cta-line">What are you waiting for, reach us right now.</p>
      </div>
      <div class="cta-banner-right">
      <NavLink className={ "btn-cta"}to={"/contact"}>
    Contact Us
    </NavLink>
        {/* <a href="contact.html" class="btn-cta">
          Contact Us
        </a> */}
      </div>
    </div>
  );
};

export default Banner;
