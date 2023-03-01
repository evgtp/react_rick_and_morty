import React from 'react'
import './Home.css'
import Img_1 from '../assets/image/img_1.png'
import Img_2 from '../assets/image/img_2.png'
import Img_3 from '../assets/image/img_3.png'

import { Outlet, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Main">
      <Outlet />
      <Link to="person">
        <div className="Main_picture">
          <img src={Img_1} alt="" />
          <h2>Персонажи</h2>
          <p>Зайди и познакомься со всеми персонажами вселенной</p>
        </div>
      </Link>
      <Link to="location">
        <div className="Main_picture">
          <img src={Img_2} alt="" />
          <h2>Локации</h2>
          <p>Исследуй все локации. Давай же, не будь занудой!</p>
        </div>
      </Link>
      <Link to="episode">
        <div className="Main_picture">
          <img src={Img_3} alt="" />
          <h2>Эпизоды</h2>
          <p>Узнай чуть больше о карте приключений Рика и Морти</p>
        </div>
      </Link>
    </div>
  )
}

export default Home
