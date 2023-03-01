import React from 'react'
import './Favorites.css'

import { NavLink, Outlet } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import Back from '../assets/image/Back.svg'

function Favorites() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className="Favorites">
      <div className="intro">
        <div onClick={goBack} className="buttonBack">
          <img src={Back} alt="" />
          <p>Назад</p>
        </div>
        <div className="title">
          <h2>Избраннное</h2>
        </div>
      </div>
      <div className="divBtnNav">
        <NavLink
          to="/favorites/favoritesLocation"
          className={({ isActive }) => (isActive ? 'active-favorites' : '')}
        >
          <div className="location btnNav">
            <h3>Локации</h3>
          </div>
        </NavLink>
        <NavLink
          to="/favorites/favoriresPerson"
          className={({ isActive }) => (isActive ? 'active-favorites' : '')}
        >
          <div className="person btnNav">
            <h3>Персонажи</h3>
          </div>
        </NavLink>
        <NavLink
          to="/favorites/favoriresEpisode"
          className={({ isActive }) => (isActive ? 'active-favorites' : '')}
        >
          <div className="episode btnNav">
            <h3>Эпизоды</h3>
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Favorites
