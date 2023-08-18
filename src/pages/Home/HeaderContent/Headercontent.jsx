import React from 'react'
import { NavLink } from 'react-router-dom'

const Headercontent = () => {
  return (
    <div class="header-content">
    <h1 class='lg-heading text-light main-heading'>travel the world</h1>
    <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
    <NavLink className={ 'btn btn-primary text-red md-heading'}to={'#'}>
    Explore Places
    </NavLink>
  
    
</div>
  )
}

export default Headercontent