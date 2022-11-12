"use client"

import { useState } from 'react'

const useLoginForm = () => {
  //  Estado para almacenar la data
  const [loginForm, setLoginForm] = useState({
    dni: '',
    password: ''
  })

  const updateLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  return { loginForm, updateLoginForm }
}

export { useLoginForm }