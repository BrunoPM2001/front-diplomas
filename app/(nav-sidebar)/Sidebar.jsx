import { useRouter } from 'next/navigation'
import styles from '../../styles/Sidebar.module.css'

//  Si se tienen más ventanas añadir aquí al sidebar
const listForSidebar = [
  { text: "Inicio", to: "inicio" },
  { text: "Padrones", to: "padrones" },
  { text: "Excel", to: "excel" }
]

export default function Sidebar ({ menuState }) {

  const router = useRouter()

  const sendTo = (to) => {
    router.push(to)
  }

  const closeSession = () => {
    localStorage.removeItem('token')
    router.push("")
  }

  return (
    <div className={ menuState ? styles.menuOpen : styles.menuClose }>
      <div className={styles.sidebar}>
        <h1 className={styles.icon}>REGISTRO</h1>
        {
          listForSidebar.map(element => {
            return <div className={styles.sidebarElement} onClick={() => sendTo(element.to)}>{element.text}</div>
          })
        }
        <div className={styles.sidebarElement} onClick={() => closeSession()}>Cerrar sesión</div>
      </div>
    </div>
  )
}