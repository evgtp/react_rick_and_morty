import React from 'react'
import '../pages/PageLocation.css'

function SortLocation({
  nameLocation,
  createLocation,
  nameTypeLocation,
  createTypeLocation,
  nameDimension,
  createNameDimension,
}) {
  return (
    <div className="filter_location">
      <div className="filter_title">
        <p>Поиск по названию</p>
        <input
          type="text"
          value={nameLocation}
          onChange={(event) => createLocation(event.target.value)}
          placeholder="Введите название локации"
        />
      </div>
      <div className="filter_type">
        <p>Поиск по типу</p>
        <input
          type="text"
          value={nameTypeLocation}
          onChange={(event) => createTypeLocation(event.target.value)}
          placeholder="Введите тип локации"
        />
      </div>
      <div className="filter_dimension">
        <p>Поиск по измерению</p>
        <input
          type="text"
          value={nameDimension}
          onChange={(event) => createNameDimension(event.target.value)}
          placeholder="Введите измерение"
        />
      </div>
    </div>
  )
}

export default SortLocation
