"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginForm } from '../hooks/useForm'
import { api_login } from '../api/login'
import styles from '../styles/Login.module.css'

export default function Login () {

  const [error, setError] = useState(false)
  const { loginForm, updateLoginForm } = useLoginForm()
  const router = useRouter()

  const handleLogin = async () => {
    if (await api_login(loginForm)) {
      router.push('inicio')
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Iniciar sesión</h1>
      <div className={styles.fullInput}>
        <label>N° de DNI:</label>
        <input name="dni" type="text" placeholder='Escriba su número de DNI' value={loginForm.dni} onChange={updateLoginForm}/>
      </div>
      <div className={styles.fullInput}>
        <label>Contraseña:</label>
        <div className={styles.inputPass}>
          <input name="password" type="password" placeholder='Escriba su contraseña' value={loginForm.password} onChange={updateLoginForm}/>
          <button>icon for show/hide p</button>
        </div>
      </div>
      <button onClick={() => handleLogin()}>Ingresar</button>
      { error && 
        <div className={styles.errorLogin}>
          <p>Ícono de alerta</p>
          <p>Error al iniciar sesión</p>
        </div>
      }
    </div>
  )
}