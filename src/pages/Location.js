import React, {useState} from 'react'
import './Location.css'
import { useDispatch, useSelector } from 'react-redux'
import { addLocation, setAddedBtn } from '../redux/slices/favoritesSlice'
import { ReactComponent as AddButton } from '../assets/image/Add_ellipse.svg'
import { ReactComponent as Append } from '../assets/image/Append_ellipse.svg'


function Location({ id, name, type, dimension, residents }) {
  const onClickAdd = () => {
    const location = {
      id,
      name,
      type,
      dimension,
      residents,
    }
    dispatch(addLocation(location))
  }

  const addedBtn = useSelector((state) => state.favorites.addedBtn)

  const btnAppend = () => {
    dispatch(setAddedBtn(1))
  }

  const [addAppend, setAddAppend] = useState(false)

  const addFavoritesClick = () => {
    setAddAppend(!addAppend)
  }

  const dispatch = useDispatch()

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
      {addAppend === false ? (
      <button onClick={() => {onClickAdd(); addFavoritesClick()}} className="addBtn">
        <AddButton />
      </button>
      ) : (
      <button className='appendBtn'>
        <Append  />
      </button>
      )}
    </div>
  )
}

export default Location
