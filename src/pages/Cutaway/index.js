import React, { useState, useEffect } from 'react'
// import CutawaySkeleton from './CutawaySkeleton'
// import AddButton from '../../assets/image/Add.svg'
// import axios from 'axios'
import '../Cutaway.css'
import ButtonFav from '../../components/ButtonFav'
import ButtonAddFav from '../../components/ButtonAddFav'

import { useDispatch, useSelector } from 'react-redux'
import { addItem, setAddedBtn, setAddAppend, } from '../../redux/slices/favoritesSlice'
import Add from '../../assets/image/Add.svg'
import { ReactComponent as AddButton } from '../../assets/image/Add_ellipse.svg'
import { ReactComponent as Append } from '../../assets/image/Append_ellipse.svg'
// import ButtonAddFav from '../../components/ButtonAddFav'
// import Skeleton from 'react-loading-skeleton'

// const baseUrl = 'https://rickandmortyapi.com/api/character'

function Cutaway({
  id,
  image,
  name,
  species,
  origin,
  location,
  gender,
  status,
  objectID,
  episode,
}) {
  const rex = /\d+/

  const [addAppend, setAddAppend] = useState(false)


  const onClickAdd = () => {
    const item = {
      id,
      image,
      name,
      species,
      origin,
      location,
      status,
    }
    dispatch(addItem(item))
    dispatch(setAddAppend(true))
  }




  const dispatch = useDispatch()

  // const addAppend = useSelector((state) => state.favorites.addAppend)

  const activeBtn = useSelector((state) => state.pagination.activeBtn)

  const addedBtn = useSelector((state) => state.favorites.addedBtn)


  const btnAppend = () => {
    dispatch(setAddedBtn(true))
  }

  const epi = episode.join(', ')
  const epiz = episode.map((e) => +rex.exec(e)[0])
  const type = typeof epiz

  console.log(epiz)


  return (
    <div className={activeBtn === 1 ? 'Tile__Cutaway' : 'Cutaway'}>
      <div key={id} className="img">
        <img src={image} alt="" />
      </div>
      <div className={activeBtn === 1 ? 'Tile__name' : 'name'}>
        <h3 key={id}>{name}</h3>
      </div>
      <div
        className={
          activeBtn === 1 ? 'Tile__info__cutaway' : 'info_cutaway info'
        }
      >
        <div className="info_species">
          <p>Расса:</p>
          <span key={id}>{species}</span>
        </div>
        <div className="info_origin">
          <p>Место происхождения:</p>
          <span key={id}>{origin}</span>
        </div>
        <div className="info_location">
          <p>Последняя локация:</p>
          <span key={id}>{location}</span>
        </div>
      </div>
      <div className={activeBtn === 1 ? 'Tile__epiz' : 'info_cutaway details'}>
        <p>
          Пол:<span key={id}>{gender}</span>
        </p>
        <p>
          Эпизоды:{' '}
          <span className={activeBtn === 1 ? 'Tile__epiz' : ''}>{epiz}</span>
        </p>
      </div>
      <div className="status">
        <span key={id}>{status}</span>
      </div>
      {addAppend === false ? (
        <button
          onClick={() => {onClickAdd(); btnAppend()}}
          className={activeBtn === 1 ? 'Tile__catuway_btn' : 'catuway_btn btn'}
        >
          <AddButton className="Add_btn_svg" />
          <ButtonFav />
        </button>
      ) : (
        <button
          className={
            activeBtn === 1
              ? 'Tile__catuway_btn'
              : 'catuway_btn_append btn_append'
          }
        >
          <Append />
          <ButtonAddFav className="Add_btn_long" />
        </button>
      )}
    </div>
  )
}

export default Cutaway
