import React from "react";

import Spot1 from "./Spot1/Spot1";
import Spot2 from "./Spot2/Spot2";
import Spot3 from "./Spot3/Spot3";
import Spot4 from "./Spot4/Spot4";
import Spot5 from "./Spot5/Spot5";
import Spot6 from "./Spot6/Spot6";
const FavTourists = () => {
  return (
    <section class="favtourists">
      <h2 class="txt_1">My Favourite Tourist Spots</h2>
      <Spot1/>
      <Spot2/>
     <Spot3/>
     <Spot4/>
     <Spot5/>
     <Spot6/>
    </section>
  );
};

export default FavTourists;
