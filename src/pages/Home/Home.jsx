import React from "react";

import Pic1 from "./Pictures/Pic1/Pic1";

import Pic2 from "./Pictures/Pic2/Pic2";
import { Features } from "./Features/Features";

const Home = () => {
  return (
    <>
      <header class="header"></header>
      <h1 className="text">MY HOBBIES</h1>
      <Pic1 />
      <Pic2 />
      <h2 className="text">MY EDUCATION</h2>
      <Features />
    </>
  );
};

export default Home;
