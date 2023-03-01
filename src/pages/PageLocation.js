import React, { useState, useEffect } from 'react'
import './PageLocation.css'
import './Location.css'
import Location from './Location'
import LocationSkeleton from './LocationSkeleton'
import SortLocation from '../components/SortLocation'
import LocationPagination from '../pagination/LocationPagination'
import axios from 'axios'

function PageLocation() {
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [nameLocation, setNameLocation] = useState('')
  const [typeLocation, setTypeLocation] = useState('')
  const [nameDimension, setNameDimension] = useState('')
  const [size, setSize] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const loadLocation = (page = null) => {
    setIsLoading(true)
    let url = `https://rickandmortyapi.com/api/location/?name=${nameLocation}&type=${typeLocation}&dimension=${nameDimension}`
    if (page) {
      url += `&page=${page}`
    }

    axios.get(url).then((data) => {
      setLocations(data.data.results)
      setSize(data.data.info.pages)
      setIsLoading(false)
    })
    window.scrollTo(0, 0)
  }

  const changePage = (page) => {
    setCurrentPage(page)
    loadLocation(page)
    console.log(setCurrentPage)
  }

  useEffect(() => {
    setCurrentPage(1)
    loadLocation()
  }, [nameLocation, typeLocation, nameDimension])

  return (
    <>
      <div className="Info">
        <div className="title">
          <h1>Локации</h1>
        </div>
        <SortLocation
          nameLocation={nameLocation}
          createLocation={setNameLocation}
          nameTypeLocation={typeLocation}
          createTypeLocation={setTypeLocation}
          nameDimension={nameDimension}
          createNameDimension={setNameDimension}
        />
        <div className="Location_root">
          {isLoading
            ? [...new Array(8)].map((_, index) => (
                <LocationSkeleton key={index} />
              ))
            : locations.map((location, index) => (
                <Location
                  key={location.index}
                  id={location.id}
                  name={location.name}
                  type={location.type}
                  dimension={location.dimension}
                  residents={location.residents}
                />
              ))}
        </div>
        <LocationPagination
          size={size}
          onChangePage={(number) => changePage(number)}
        />
      </div>
    </>
  )
}

export default PageLocation
