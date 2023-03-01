import React, { useState, useEffect } from 'react'
import './PageEpisode.css'
import Episode from './Episode'
import EpisodeSkeleton from './EpisodeSkeleton'
import SortEpisode from '../components/SortEpisode'
import EpisodePagination from '../pagination/EpisodePagination'

import axios from 'axios'

function PageEpisode() {
  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [nameEpisode, setNameEpisode] = useState('')
  const [currentStatus, setCurrentStatus] = useState('')
  const [codeEpisode, setCodeEpisode] = useState('')
  const [size, setSize] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const rex = /\d+/

  const loadEpisode = (page = null) => {
    setIsLoading(true)
    let url = `https://rickandmortyapi.com/api/episode/?name=${nameEpisode}&episode=${codeEpisode}`
    if (page) {
      url += `&page=${page}`
    }

    axios.get(url).then((data) => {
      setEpisodes(data.data.results)
      setEpisodes(
        data.data.results.map((episode) => ({
          ...episode,
          characters: episode.characters.map((char) => +rex.exec(char)[0]),
        }))
      )
      setSize(data.data.info.pages)
      setIsLoading(false)
    })
    window.scrollTo(0, 0)
  }

  const changePage = (page) => {
    setCurrentPage(page)
    loadEpisode(page)
    console.log(setCurrentPage)
  }

  useEffect(() => {
    setCurrentPage(1)
    loadEpisode()
  }, [nameEpisode, codeEpisode])

  return (
    <div className="Info">
      <div className="title">
        <h1>Эпизоды</h1>
      </div>
      <SortEpisode
        episode={nameEpisode}
        setEpisode={setNameEpisode}
        code={codeEpisode}
        setCode={setCodeEpisode}
        status={currentStatus}
        onClickStatus={(value) => setCurrentStatus(value)}
      />
      {isLoading
        ? [...new Array(12)].map((_, index) => <EpisodeSkeleton key={index} />)
        : episodes.map((episode, index) => (
            <Episode
              id={episode.id}
              name={episode.name}
              episode={episode.episode}
              air_date={episode.air_date}
              characters={episode.characters}
              status={currentStatus}
            />
          ))}
      <EpisodePagination
        size={size}
        onChangePage={(number) => changePage(number)}
      />
    </div>
  )
}

export default PageEpisode
