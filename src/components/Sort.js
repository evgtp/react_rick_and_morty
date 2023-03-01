import React, { useState, useCallback } from 'react'
import Select from 'react-select'
import '../pages/PagePerson.css'
import {
  setCurrentStatus,
  setSpeciesValue,
  setNowValue,
  setActiveBtn,
} from '../redux/slices/paginationSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'

import debounce from 'lodash.debounce'

import { ReactComponent as ColumnBlack } from '../assets/image/Column_black.svg'
import { ReactComponent as TileBlack } from '../assets/image/Tile_black.svg'
// import Delta from '../assets/image/Delta.svg'
// import indicatorGreen from '../assets/image/IndicatorGreen.svg'
// import IndicatorRed from '../assets/image/IndicatorRed.svg'
// import IndicatorYellow from '../assets/image/IndicatorYellow.svg'

const options = [
  { value: 'Alive', label: 'Живой' },
  { value: 'Dead', label: 'Мертв' },
  { value: 'unknown', label: 'Неизвестно' },
]

function Sort({
  status,
  onClickStatus,
  species,
  createSpecies,
  nameValue,
  createValue,
}) {
  // const [name, setName] = useState(nameValue)

  // const inputDebounce = useCallback(
  //   debounce(() => {
  //     console.log('hello')
  //   }, 1000),
  //   []
  // )

  const [specValue, setSpecValue] = useState('')
  const [nominalValue, setNominalValue] = useState('')
  // const [activeBtn, setActiveBtn] = useState(0)

  const nowValue = useSelector((state) => state.pagination.nowValue)

  const activeBtn = useSelector((state) => state.pagination.activeBtn)

  const dispatch = useDispatch()

  const getValue = () => {
    return status ? options.find((s) => s.value === status) : ''
  }

  const onChange = (newValue) => {
    dispatch(setCurrentStatus(newValue.value))
  }

  // const onNameKeyPress = (event) => {
  //   event.key === 'Enter' && createValue(nowValue)
  // }

  const updateSpeciesValue = useCallback(
    debounce((str) => {
      dispatch(setSpeciesValue(str))
    }, 1500),
    []
  )

  const btnViewRow = () => {
    dispatch(setActiveBtn(0))
  }

  const btnViewTile = () => {
    dispatch(setActiveBtn(1))
  }

  const onChangeSpecies = (event) => {
    setSpecValue(event.target.value)
    updateSpeciesValue(event.target.value)
  }

  const updateNameValue = useCallback(
    debounce((str) => {
      dispatch(setNowValue(str))
    }, 1500),
    []
  )

  const onChangeName = (event) => {
    setNominalValue(event.target.value)
    updateNameValue(event.target.value)
  }

  return (
    <div className="filter_cutaway">
      <div className="filterName">
        <p>Поиск по имени</p>
        <input
          type="text"
          value={nominalValue}
          onChange={onChangeName}
          // onKeyDown={onNameKeyPress}
          placeholder="Введите имя персонажа"
        />
      </div>
      <div className="filterSpecies">
        <p>Поиск по расе</p>
        <input
          type="text"
          value={specValue}
          onChange={onChangeSpecies}
          placeholder="Введите расу персонажа"
        />
      </div>
      <div className="filterStatus">
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
      <div className="filterView">
        <p>Вид:</p>
        <div className="btn__view">
          <span
            onClick={() => btnViewRow(0)}
            className={activeBtn === 0 ? 'active-span' : 'btn-span'}
          >
            <ColumnBlack
              onClick={() => btnViewRow(0)}
              className={activeBtn === 0 ? 'active-btn' : ''}
              alt=""
            />
          </span>
          <span
            onClick={() => btnViewTile(1)}
            className={activeBtn === 1 ? 'active-span' : 'btn-span'}
          >
            <TileBlack
              onClick={() => btnViewTile(1)}
              className={activeBtn === 1 ? 'active-btn' : ''}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sort
