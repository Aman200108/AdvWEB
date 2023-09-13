import React from "react";

import City1 from "./City1/City1";
import City2 from "./City2/City2";
import City3 from "./City3/City3";
const FavCities = () => {
  return (
    <section class="favcity">
      <h2 className="txt">My Favourite Cities</h2>
      <City1 />
      <City2 />
      <City3 />
    </section>
  );
};

export default FavCities;
