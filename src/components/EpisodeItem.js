import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScene } from '../redux/slices/favoritesSlice'
import '../pages/Episode.css'
import DeleteItems from '../assets/image/delete-to-favorites.svg'

import axios from 'axios'

function EpisodeItems({ id, name, episode, air_date, characters, status }) {
  const [persons, setPersons] = useState([])
  const dispatch = useDispatch()
  const scenes = useSelector((state) => state.favorites.scenes)

  const onClickRemove = () => {
    dispatch(removeScene(id))
  }

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/[${characters}]?status=${
          status || ''
        }`
      )
      .then((res) => setPersons(res.data))
  }, [status])

  return (
    <div className="Episode">
      <div className="Episode_info" key={id}>
        <h3>{name}</h3>
        <p>Эпизод:</p>
        <span>{episode}</span>
        <p>Дата выхода:</p>
        <span>{air_date}</span>
      </div>
      <div className="Cutaway_in_Episode">
        <p>Персонажи, учавствующие в эпизоде:</p>
        <span>{persons?.map((person) => person.name).join(', ')}</span>
      </div>
      <div onClick={onClickRemove} className="episode_btn Btn">
        <img src={DeleteItems} alt="" />
        <p>Удалить из избранного</p>
      </div>
    </div>
  )
}

export default EpisodeItems
