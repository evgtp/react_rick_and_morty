import React, { useState } from 'react'
import Select from 'react-select'
import '../pages/PageEpisode.css'

import Delta from '../assets/image/Delta.svg'

function SortEpisode({
  status,
  onClickStatus,
  episode,
  setEpisode,
  code,
  setCode,
}) {
  const options = [
    { value: 'Alive', label: 'Живой' },
    { value: 'Dead', label: 'Мертв' },
    { value: 'unknown', label: 'Неизвестно' },
  ]

  const getValue = () => {
    return status ? options.find((s) => s.value === status) : ''
  }

  const onChange = (newValue) => {
    onClickStatus(newValue.value)
  }

  return (
    <div className="filter">
      <div className="filter_episode">
        <p>Поиск по названию</p>
        <input
          type="text"
          value={episode}
          onChange={(event) => setEpisode(event.target.value)}
          placeholder="Введите название серии"
        />
      </div>
      <div className="filter_race">
        <p>Поиск по коду эпизода</p>
        <input
          type="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Введите код эпизода"
        />
      </div>
      <div className="filter_status">
        <p>Поиск по статусу</p>
        <Select
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getValue()}
          options={options}
          placeholder={'Выберете статус персонажа'}
          isSearchable={false}
        />
      </div>
    </div>
  )
}

export default SortEpisode
