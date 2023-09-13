import React from "react";

const Pic2 = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="row row2">
          <div class="img-box">
            <iframe
              width="485"
              height="350"
              src="https://www.youtube.com/embed/49HTIoCccDY"
              title="TAJ MAHAL (Agra, India): full tour"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="text-box">
            <h2 class="lg-heading text-black">Taj Mahal</h2>
            <p class="text-gray">
              The Taj Mahal is an ivory-white marble mausoleum on the south bank
              of the Yamuna river in the Indian city of Agra. It was
              commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned
              from 1628 to 1658), to house the tomb of his favourite wife,
              Mumtaz Mahal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pic2;
