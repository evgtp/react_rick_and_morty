import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addScene, setAddedBtn } from '../redux/slices/favoritesSlice'
import ButtonAddFav from '../components/ButtonAddFav'
import './Episode.css'

import axios from 'axios'

import ButtonFav from '../components/ButtonFav'

function Episode({ id, name, episode, air_date, characters, status }) {
  console.log('id', id)

  const [persons, setPersons] = useState([])

  const [addAppend, setAddAppend] = useState(false)

  const addFavoritesClick = () => {
    setAddAppend(!addAppend)
  }

  const btnAppend = () => {
    dispatch(setAddedBtn(1))
  }

  const dispatch = useDispatch()

  const onClickAdd = () => {
    const scene = {
      id,
      name,
      episode,
      air_date,
      characters,
      status,
    }
    dispatch(addScene(scene))
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
      {addAppend === false ? (
      <button
      onClick={() => {onClickAdd(); addFavoritesClick()}}
      className="episode_btn delete_btn Btn">
        <ButtonFav />
      </button>
      ) : (
        <button className="episode_btn_append">
        <ButtonAddFav />
      </button>
      )}
    </div>
  )
}

export default Episode
