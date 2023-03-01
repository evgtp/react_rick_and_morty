import React from 'react'
import './NotFoundPage.css'

import NotFound from '../assets/image/404.png'
import House from '../assets/image/house.png'

import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <img src={NotFound} alt="" />
      <h2>Усп. Кажется вы заблудились. Только без паники!</h2>
      <p>Страница, которую вы ищите не существует, либо была удалена</p>
      <Link to="/">
        <button>
          <img src={House} alt="" />
          <p>Домой</p>
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
