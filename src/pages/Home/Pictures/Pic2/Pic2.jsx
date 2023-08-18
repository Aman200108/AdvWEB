import React from 'react'
import img1 from "./showcase-photo1.jpg"
import { NavLink } from 'react-router-dom'
const Pic2 = () => {
  return (
    <section class='showcase'>
    <div class="container">
    <div class="row row2">
    <div class="img-box">
        <img src={img1} alt="Image Description"/>
    </div>
    <div class="text-box">
        <h2 class='lg-heading text-black'>DESERT, EGYPT</h2>
        <p class='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
        <NavLink className={ 'btn btn-secondary'}to={'./about'}>
    More
    </NavLink>
    </div>
</div>
</div>
</section>
  )
}

export default Pic2