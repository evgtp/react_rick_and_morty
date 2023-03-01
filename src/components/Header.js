import React, { useState } from 'react'
import GuestControls from './GuestControls'
import Logo from './Logo'
import './Header.css'
import './Logo.css'
import '../components/List.css'

import { Link, NavLink, Outlet } from 'react-router-dom'

import { connect } from 'react-redux'
import setListAction from '../stage/action/actionList'

function Header({ list, setListFunction, setActive, setAuthActive }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className="Header">
        <Link to="/">
          <div className="Logo">
            <Logo name="logo" />
          </div>
        </Link>
        <div className="List">
          <NavLink
            onClick={() => setActiveIndex(0)}
            className={activeIndex === 0 ? 'active' : ''}
            end
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            onClick={() => setActiveIndex(1)}
            className={activeIndex === 1 ? 'active' : ''}
            id="favorites"
            to="/favorites"
          >
            Избранное
          </NavLink>
          <NavLink
            onClick={() => setActiveIndex(2)}
            className={activeIndex === 2 ? 'active' : ''}
            to="/information"
          >
            О проекте
          </NavLink>
        </div>
        <div className="Controls">
          <button onClick={setActive}>Регистрация</button>
          <button onClick={setAuthActive}>Войти</button>
        </div>
      </div>
      <Outlet />
    </>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setListFunction: (list) => {
      dispatch(setListAction(list))
    },
  }
}

export default connect(null, mapDispatchToProps)(Header)
