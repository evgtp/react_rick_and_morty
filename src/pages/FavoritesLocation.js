import React from 'react'
import './Favorites.css'
import '../pages/Location.css'
import { useSelector, useDispatch } from 'react-redux'

import LocationItems from '../components/LocationItem'

function FavoritesLocation() {
  const dispatch = useDispatch()
  const locations = useSelector((state) => state.favorites.locations)

  if (locations.length < 1) {
    return (
      <div className="favorites_title">
        <h7>У вас пока нет избранных локаций</h7>
      </div>
    )
  }

  return (
    <>
      <div className="Location_items">
        {locations.map((location) => (
          <LocationItems key={location.id} {...location} />
        ))}
      </div>
    </>
  )
}

export default FavoritesLocation
