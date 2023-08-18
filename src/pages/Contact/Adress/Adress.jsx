import React from 'react'
import img1 from "./company-img.jpg"
const Adress = () => {
  return (


    <div class="company-address">
    <div class="address-group">
        <i class="fas fa-map-marker-alt fa-3x text-red"></i>
        <h2 class="text-gray md-heading">Location</h2>
        <p>#2661 Janakpuri Colony, city name, town name</p>
    </div>
    <div class="address-group">
        <i class="far fa-envelope fa-3x text-red"></i>
        <h2 class="text-gray md-heading">Email</h2>
        <p>harshitvashisth@mycompany.com</p>
    </div>
    <div class="address-group">
        <i class=" fas fa-phone-square-alt fa-3x text-red"></i>
        <h2 class="text-gray md-heading">Call</h2>
        <p>+910101010101</p>
    </div>
    <img src={img1} alt="Image Description"/>
</div>

  )
}

export default Adress