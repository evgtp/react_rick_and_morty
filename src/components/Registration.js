import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import './RegModul.css'
import rickTop from '../assets/image/Rick_Top.svg'
import rickLeft from '../assets/image/Rick_Left.svg'
import mortyRight from '../assets/image/Morty_Right.svg'

function Registration({ active, setActive }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <img className="rickTop" src={rickTop} alt="Декорация" />
      <img className="rickLeft" src={rickLeft} alt="Декорация" />
      <img className="mortyRight" src={mortyRight} alt="Декорация" />
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="login__form">
          <h1>Регистрация</h1>
          <input
            {...register('email', {
              required: 'Поле обязательное для ввода',
              minLength: {
                value: 6,
                message: 'Длинна email менее 6 символов',
              },
              maxLength: {
                value: 50,
                message: 'Длинна email более 50 символов',
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Введите корректный email',
              },
            })}
            className="email"
            type="text"
            placeholder="Введите E-mail"
          />
          {errors?.email && (
            <p className="error_email">{errors.email.message}</p>
          )}
          <input
            {...register('login', {
              required: 'Поле обязательное для ввода',
              minLength: {
                value: 6,
                message: 'Длинна login менее 6 символов',
              },
              maxLength: {
                value: 20,
                message: 'Длинна login более 20 символов',
              },
            })}
            className="login"
            type="text"
            placeholder="Придумайте логин"
          />
          {errors?.login && (
            <p className="error_login">{errors.login.message}</p>
          )}
          <input
            {...register('name', {
              required: 'Поле обязательное для ввода',
              minLength: {
                value: 2,
                message: 'Длинна name менее 2 символов',
              },
              maxLength: {
                value: 50,
                message: 'Длинна name более 50 символов',
              },
            })}
            className="Name"
            type="text"
            placeholder="Введите имя"
          />
          {errors?.name && <p className="error_name">{errors.name.message}</p>}
          <input
            {...register('surname', {
              required: 'Поле обязательное для ввода',
              minLength: {
                value: 2,
                message: 'Длинна surname менее 2 символов',
              },
              maxLength: {
                value: 50,
                message: 'Длинна surname более 50 символов',
              },
            })}
            className="surname"
            type="text"
            placeholder="Введите фамилию"
          />
          {errors?.surname && (
            <p className="error_surname">{errors.surname.message}</p>
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
            className="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Введите пароль"
          />
          {errors?.password && (
            <p className="error_password">{errors.password.message}</p>
          )}
          <input
            checked={showPassword}
            onChange={(e) => setShowPassword(!showPassword)}
            className="register__form-show-password"
            type="checkbox"
          />
          <div className={showPassword ? 'hide active' : 'hide'}></div>
          <input
            {...register('confirmPassword', {
              required: 'Поле обязательное для ввода',
              validate: (value) => value === password || 'Пароль не совпадает',
            })}
            className="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Повторите пароль"
            onCopy={(e) => {
              e.preventDefault()
              return false
            }}
          />
          {errors?.confirmPassword && (
            <p className="error_confirmPassword">
              {errors.confirmPassword.message}
            </p>
          )}
          <input
            checked={showConfirmPassword}
            onChange={(e) => setShowConfirmPassword(!showConfirmPassword)}
            className="register__form-show-confirmPassword"
            type="checkbox"
          />
          <div className={showConfirmPassword ? 'hide2 active' : 'hide2'}></div>
          <button>Зарегистрировать</button>
        </form>
      </div>
    </div>
  )
}

export default Registration
