import React from 'react'
import img1 from "./showcase-photo3.jpg"
import { NavLink } from 'react-router-dom'
const Pic1 = () => {
  return (
    <section class='showcase'>
    <div class="container">
    <div class="row row1">
        <div class="img-box">
           <img src={img1} alt="image" />
        </div>
        <div class="text-box">
            <h2 class='lg-heading text-black'>DEGANVY, U.K</h2>
            <p class='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
            <NavLink className={ 'btn btn-secondary'}to={'./about'}>
    More
    </NavLink>
            
        </div>
    </div>
    </div>
    </section>
  )
}

export default Pic1