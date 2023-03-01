import React from 'react'
import './Favorites.css'
import { useSelector, useDispatch } from 'react-redux'

import EpisodeItems from '../components/EpisodeItem'

function FavoritesEpisode() {
  const dispatch = useDispatch()
  const scenes = useSelector((state) => state.favorites.scenes)

  if (scenes.length < 1) {
    return (
      <div className="favorites_title">
        <h7>У вас пока нет избранных эпизодов</h7>
      </div>
    )
  }

  return (
    <>
      <div className="Episode_items">
        {scenes.map((scene) => (
          <EpisodeItems key={scene.id} {...scene} />
        ))}
      </div>
    </>
  )
}

export default FavoritesEpisode
