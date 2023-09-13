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
              src="https://www.youtube.com/embed/izYiDDt6d8s"
              title="Spectacular Norway Northern Lights | National Geographic"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">Norway</h2>
            <p class="text-gray">
              Norway,formally the Kingdom of Norway,is a Nordic country in
              Northern Europe, the mainland territory of which comprises the
              western and northernmost portion of the Scandinavian Peninsula.
              The remote Arctic island of Jan Mayen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic1;
