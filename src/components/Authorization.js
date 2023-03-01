import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

import './AuthModul.css'
import rickTop from '../assets/image/Rick_Top.svg'
import rickLeft from '../assets/image/Rick_Left.svg'
import mortyRight from '../assets/image/Morty_Right.svg'
import {ReactComponent as Hide} from '../assets/image/Hide.svg'
import {ReactComponent as Show} from '../assets/image/Show.svg'

function Authorization({ authActive, setAuthActive }) {

  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordClick = () => {
    setShowPassword(!showPassword)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm('onChange')

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  const password = watch('password')


  return (
    <div
      className={authActive ? 'modalAuth active' : 'modalAuth'}
      onClick={() => setAuthActive(false)}
    >
      <img className="rickTop" src={rickTop} alt="Декорация" />
      <img className="rickLeft" src={rickLeft} alt="Декорация" />
      <img className="mortyRight" src={mortyRight} alt="Декорация" />
      <div
        className={
          authActive ? 'modalAuth__content active' : 'modalAuth__content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <form noValidate onSubmit={handleSubmit(onSubmit)}
        className="authorization__form"
        >
          <h1>Вход</h1>
          <input
          {...register('email_or_login',{
            required: 'Поле обязательное для ввода',
            minLength: {
              value: 6,
              message: 'Длинна email менее 6 символов',
            },
            maxLength: {
              value: 50,
              message: 'Длинна email более 50 символов',
            },
          })}
          className='authorization__form-input'
          type="text"
          placeholder="Введите или E-mail" />
          {errors?.email_or_login && (
            <p className="error_email_or_login">{errors.email_or_login.message}</p>
          )}
          <input
          {...register('password', {
            required: 'Поле обязательное для ввода',
            minLength: {
              value: 6,
              message: 'Длинна пароля менее 6 символов',
            },
            maxLength: {
              value: 50,
              message: 'Длинна пароля более 50 символов',
            },
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
              message:
                'Пароль должен содержать символы верхнего регистра, нижнего регистра и цифры',
            },
          })}
          type={showPassword ? 'text' : 'password'}
          placeholder="Введите пололь" />
          {errors?.password && (
            <p className="password_error">{errors.password.message}</p>
          )}
          <div className='show__password'>
            {
              (showPassword === false) ? <Hide onClick={handlePasswordClick}/> : <Show onClick={handlePasswordClick}/>
            }
          </div>
          <input
            type="checkbox"
            className="remember"
            id="remember"
            name="remember"
          />
          <label htmlFor="remember">Запомнить</label>
          <button>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Authorization
