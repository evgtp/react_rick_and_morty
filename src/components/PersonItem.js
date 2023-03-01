import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../redux/slices/favoritesSlice'
import '../pages/Favorites.css'
import DeleteItems from '../assets/image/delete-to-favorites.svg'

function PersonItems({ id, image, name, species, origin, location, status }) {
  const dispatch = useDispatch()
  const item = useSelector((state) => state.favorites.items)

  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className="Cutaway__favorites">
      <div key={id} className="img">
        <img src={image} alt="" />
      </div>
      <div className="name__favorites">
        <h3 key={id}>{name}</h3>
      </div>
      <div className="info_cutaway__favorites info__favorites">
        <div className="info_species__favorites">
          <p>Расса:</p>
          <span key={id}>{species}</span>
        </div>
        <div className="info_origin__favorites">
          <p>Место происхождения:</p>
          <span key={id}>{origin}</span>
        </div>
        <div className="info_location__favorites">
          <p>Последняя локация:</p>
          <span key={id}>{location}</span>
        </div>
      </div>
      <div className="status__favorites">
        <span key={id}>{status}</span>
      </div>
      <button onClick={onClickRemove} className="btn__favorites">
        <img src={DeleteItems} alt="" />
      </button>
    </div>
  )
}

export default PersonItems
