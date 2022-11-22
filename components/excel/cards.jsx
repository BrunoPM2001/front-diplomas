import Dropzone from "./dropzone"
import styles from "../../styles/Excel.module.css"
export default function LoadCard ( props ) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>{props.tittle}</h2>
        <p>{props.accion}</p>
      </div>
      <p className={styles.cardDesc}>{props.desc}</p>
      <Dropzone/>
    </div>
  )
}