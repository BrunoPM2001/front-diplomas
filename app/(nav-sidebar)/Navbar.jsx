import styles from "../../styles/Navbar.module.css"

export default function Navbar ({ changeMenuState }) {
  return (
    <div className={styles.navbar}>
      <p onClick={() => changeMenuState()}>Ícono</p>
      <div>
        Bruno Porras
      </div>
    </div>
  )
}