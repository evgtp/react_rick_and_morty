import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeLocation } from '../redux/slices/favoritesSlice'
import '../pages/Location.css'
import DeleteItems from '../assets/image/delete-to-favorites.svg'

function LocationItems({ id, name, type, dimension, residents }) {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.favorites.locations)

  const onClickRemove = () => {
    dispatch(removeLocation(id))
  }

  return (
    <div key={id} className="Locations">
      <h3>{name}</h3>
      <div className="Planet">
        <div className="Location_info" key={id}>
          <p>Тип:</p>
          <span>{type}</span>
          <p>Измерние:</p>
          <span>{dimension}</span>
        </div>
        <div className="Amount_cutaways">
          <p>
            Количество персонажей, которые в последний раз были замечены здесь:
          </p>
          <span>{residents.length}</span>
        </div>
      </div>
      <button onClick={onClickRemove} className="btn__favorites">
        <img src={DeleteItems} alt="" />
      </button>
    </div>
  )
}

export default LocationItems
