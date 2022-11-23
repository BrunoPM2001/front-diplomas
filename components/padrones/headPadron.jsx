
import { previsualizarDiplomaP, generarDiplomaP, updateP } from '../../api/padrones'
import styles from '../../styles/Padrones.module.css'

export default function HeadPadron ({ loading, padron, reg }) {
  
  if (loading) {
    return (
      <div>Cargando</div>
    )
  } else {
    return (
      <div className={styles.barraHead}>
        <p className={styles.tittleHead}>Datos del padrón:</p>
        <div className={styles.groupView}>
          <p className={styles.descItem}>El diploma ha sido generado:</p>
          <p className={styles.blueItem}>{padron.estado}</p>
        </div>
        <div className={styles.groupView}>
          <p className={styles.descItem}>Creado/modificado por:</p>
          <p className={styles.blueItem}>{padron.dniAct}</p>
        </div>
        <div className={styles.buttonRed} onClick={() => previsualizarDiplomaP(reg)}>Previsualizar diploma</div>
        <div className={styles.buttonGreen} onClick={() => generarDiplomaP(reg)}>Generar diploma</div>
        <div className={styles.buttonBlue} onClick={() => updateP(reg, padron)}>Actualizar padrón</div>
      </div>
    )
  }
}