import styles from '../../styles/Excel.module.css'
import FileUpload from '../icons/file'

export default function Dropzone ({ file, setFile }) {

  return (
    <div className={styles.dropzone}>
      <input type="file" name="File" onChange={(e) => setFile(e.target.files[0])}/>
      <p>{file==null ? "Arrastre el padrón de excel aquí o búsquelo en su explorador de archivos" : file.name}</p>
      <FileUpload/>
    </div>
  )
}