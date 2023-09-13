import React from "react";

const Pic1 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row1">
          <div class="img-box">
            <iframe
              width="740"
              height="350"
              src="https://www.youtube.com/embed/7_WuTK9fH9Y"
              title="Islamabad, Pakistan 🇵🇰 - by drone [4K]"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
