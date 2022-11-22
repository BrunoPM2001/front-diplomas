import styles from '../../styles/Padrones.module.css'

export default function HeadPadron () {
  return (
    <div className={styles.barraHead}>
      <p className={styles.tittleHead}>Datos del padrón:</p>
      <div className={styles.groupView}>
        <p className={styles.descItem}>El diploma ha sido generado:</p>
        <p className={styles.blueItem}>NO</p>
      </div>
      <div className={styles.groupView}>
        <p className={styles.descItem}>Creado/modificado por:</p>
        <p className={styles.blueItem}>72458762</p>
      </div>
      <div className={styles.buttonRed}>Previsualizar diploma</div>
      <div className={styles.buttonGreen}>Generar diploma</div>
      <div className={styles.buttonBlue}>Actualizar padrón</div>
    </div>
  )
}