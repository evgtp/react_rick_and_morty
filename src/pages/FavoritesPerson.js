import React from 'react'
import './Favorites.css'
import { useSelector, useDispatch } from 'react-redux'

import PersonItem from '../components/PersonItem'

function FavoritesPerson() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.favorites.items)
  console.log(items)

  if (items.length < 1) {
    return (
      <div className="favorites_title">
        <h7>У вас пока нет избранных персонажей</h7>
      </div>
    )
  }

  return (
    <>
      <div className="favorites__sort">
        <span>Сортировать:</span>
        <span>по имени</span>
        <span>по месту происхождения</span>
        <span>по последней локации</span>
      </div>
      <div className="content__items">
        {items.map((item) => (
          <PersonItem key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default FavoritesPerson
