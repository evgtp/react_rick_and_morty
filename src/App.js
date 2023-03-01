import React, { useState } from 'react'
import Header from './components/Header'

import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Information from './pages/Information'
import NotFoundPage from './pages/NotFoundPage'
import PagePerson from './pages/PagePerson'
import PageLocation from './pages/PageLocation'
import PageEpisode from './pages/PageEpisode'
import Registration from './components/Registration'
import Authorization from './components/Authorization'
import FavoritesEpisode from './pages/FavoritesEpisode'
import FavoritesLocation from './pages/FavoritesLocation'
import FavoritesPerson from './pages/FavoritesPerson'

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [authModalActive, setAuthModalActive] = useState(false)

  return (
    <div className="container">
      <Routes>
        <Route
          to="/"
          element={
            <Header
              setActive={setModalActive}
              setAuthActive={setAuthModalActive}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="person" element={<PagePerson />} />
          <Route path="location" element={<PageLocation />} />
          <Route path="episode" element={<PageEpisode />} />
          <Route path="favorites/" element={<Favorites />}>
            <Route
              path="/favorites/favoritesLocation"
              element={<FavoritesLocation />}
            />
            <Route
              path="/favorites/favoriresPerson"
              element={<FavoritesPerson />}
            />
            <Route
              path="/favorites/favoriresEpisode"
              element={<FavoritesEpisode />}
            />
          </Route>
          <Route path="information" element={<Information />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Registration active={modalActive} setActive={setModalActive} />
      <Authorization
        authActive={authModalActive}
        setAuthActive={setAuthModalActive}
      />
    </div>
  )
}

export default App
