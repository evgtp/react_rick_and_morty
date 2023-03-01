import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'

import Cutaway from './Cutaway/index'
import Sort from '../components/Sort'
import CutawayPagination from '../pagination/CutawayPagination'
import './Cutaway.css'

import Back from '../assets/image/Back.svg'

import {
  setCurrentPage,
  setSpeciesValue,
  setNowValue,
  setCurrentStatus,
  setFilters,
} from '../redux/slices/paginationSlice'

import { useNavigate } from 'react-router-dom'
import CutawaySkeleton from '../pages/Cutaway/CutawaySkeleton'

// const baseUrl = 'https://rickandmortyapi.com/api/character'

function PagePerson() {
  const [cutaways, setCutaways] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [currentStatus, setCurrentStatus] = useState('')
  const [nowValue, setNowValue] = useState('')
  // const [speciesValue, setSpeciesValue] = useState('')
  const [size, setSize] = useState(0)
  // const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const currentPage = useSelector((state) => state.pagination.currentPage)
  const value = useSelector((state) => state.pagination.nowValue)

  const speciesValue = useSelector((state) => state.pagination.speciesValue)

  const currentStatus = useSelector((state) => state.pagination.currentStatus)

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
    }
  }, [])

  const loadCutaways = (page = null) => {
    setIsLoading(true)
    let url = `https://rickandmortyapi.com/api/character/?status=${currentStatus}&name=${value}&species=${speciesValue}`
    if (page) {
      url += `&page=${page}`
    }

    axios.get(url).then((data) => {
      setCutaways(data.data.results)
      setSize(data.data.info.pages)
      setIsLoading(false)
    })
    window.scrollTo(0, 0)
  }

  const changePage = (page) => {
    dispatch(setCurrentPage(page))
    loadCutaways(page)
    console.log(setCurrentPage)
  }

  useEffect(() => {
    setCurrentPage(1)
    loadCutaways()
  }, [value, currentStatus, speciesValue])

  useEffect(() => {
    const queryString = qs.stringify({
      value,
      currentStatus,
      speciesValue,
      currentPage,
    })

    navigate(`?${queryString}`)
  }, [value, currentStatus, speciesValue, currentPage])

  return (
    <div className="Info_cutaway">
      <div className="title">
        <div onClick={goBack} className="buttonBack">
          <img src={Back} alt="" />
          <p>Назад</p>
        </div>
        <h1>Персонажи</h1>
      </div>
      <Sort
        nameValue={value}
        createValue={setNowValue}
        species={speciesValue}
        createSpecies={setSpeciesValue}
        status={currentStatus}
        onClickStatus={(value) => setCurrentStatus(value)}
      />
      <div className="Cutaways">
        {isLoading
          ? [...new Array(12)].map((_, index) => (
              <CutawaySkeleton key={index} />
            ))
          : cutaways.map((cutaway, index) => (
              <Cutaway
                key={cutaway.index}
                id={cutaway.id}
                image={cutaway.image}
                name={cutaway.name}
                species={cutaway.species}
                origin={cutaway.origin.name}
                location={cutaway.location.name}
                gender={cutaway.gender}
                episode={cutaway.episode}
                status={cutaway.status}
              />
            ))}
      </div>
      <CutawayPagination
        size={size}
        onChangePage={(number) => changePage(number)}
      />
    </div>
  )
}

export default PagePerson
