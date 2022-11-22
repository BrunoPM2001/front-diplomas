import { useState } from 'react'
import Dropzone from "./dropzone"
import styles from "../../styles/Excel.module.css"

export default function LoadCard ( props ) {

  //  Archivo
  const [file, setFile] = useState(null)
  
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>{props.tittle}</h2>
        <p onClick={() => props.method(file)}>{props.accion}</p>
      </div>
      <p className={styles.cardDesc}>{props.desc}</p>
      <Dropzone file={file} setFile={setFile}/>
    </div>
  )
}