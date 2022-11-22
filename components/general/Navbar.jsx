import styles from '../../styles/Navbar.module.css'

import MenuIcon from '../icons/menu'

export default function Navbar () {
  return (
    <div className={styles.container}>
      <MenuIcon/>
      <p>Bruno Porras</p>
    </div>
  )
}