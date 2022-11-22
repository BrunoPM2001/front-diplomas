"use client"

import { useRouter } from 'next/navigation'
import styles from '../../styles/Sidebar.module.css'

import HomeIcon from '../icons/home'
import ListIcon from '../icons/list'
import UploadIcon from '../icons/upload'
import LogoutIcon from '../icons/logout'

const listForSidebar = [
  { text: "Inicio", icon: <HomeIcon/>, to: "inicio" },
  { text: "Padrones", icon: <ListIcon/>, to: "padrones" },
  { text: "Excel", icon: <UploadIcon/>, to: "excel" }
]

export default function Sidebar () {
  
  const router = useRouter()

  const sendTo = (to) => {
    router.push(to)
  }

  const closeSession = () => {
    localStorage.removeItem('token')
    router.push("")
  }

  return (
    <div className={styles.container}>
      <h1>REGISTRO</h1>
      <div className={styles.list}>
        {
          listForSidebar.map(element => {
            return (
              <div key={element.text} className={styles.listElement} onClick={() => sendTo(element.to)}>
                {element.icon}
                <p>{element.text}</p>
              </div>
            )
          })
        }
        <div className={styles.listElement} onClick={() => closeSession()}>
          <LogoutIcon/>
          <p>Cerrar sesión</p>
        </div>
      </div>
    </div>
  )
}