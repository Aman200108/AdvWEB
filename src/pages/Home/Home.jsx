import React from 'react'

import Pic1 from './Pictures/Pic1/Pic1'
import Headercontent from './HeaderContent/Headercontent'
import Pic2 from './Pictures/Pic2/Pic2'
import { Features } from './Features/Features'


const Home = () => {
  return (
<>
<header class='header'></header>
        <Headercontent/>
        <Pic1/>
        <Pic2/>
        <Features/>
        </>
  )
}

export default Home