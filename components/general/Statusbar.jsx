import styles from '../../styles/Navbar.module.css'

import BackIcon from '../icons/back'

export default function StatusBar () {
  return (
    <div className={styles.statusContainer}>
      <BackIcon/>
      <p>Inicio</p>
    </div>
  )
}