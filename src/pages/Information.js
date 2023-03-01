import React from 'react'
import './Information.css'

import Back from '../assets/image/Back.svg'

import { useNavigate } from 'react-router-dom'

function Information() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className="Info">
      <div className="title">
        <div onClick={goBack} className="buttonBack">
          <img src={Back} alt="" />
          <p>Назад</p>
        </div>
        <h1>О проекте</h1>
      </div>
      <div className="text">
        <p>
          Данный проект создан по мотивам приключений Рика и Морти. Здесь вы
          можете поближе познакомиться со всеми персонажами, эпизодами и
          локациями данного мультсериала.
        </p>
        <p>
          Проект является тестовым заданием для входящих кандидатов пула
          Frontend. В зависимости от грейда кандидата необходимо выполнить
          соответствующий список заданий. Желаем удачи!
        </p>
      </div>
    </div>
  )
}

export default Information
