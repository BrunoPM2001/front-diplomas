import styles from '../../styles/Padrones.module.css'

export default function BodyPadron () {
  return (
    <div className={styles.itemsCont}>
      <div className={styles.padronItem}>
        <p>Registro</p>
        <input placeholder='B.U.C.E.0535-2022'/>
      </div>
      <div className={styles.padronItem}>
        <p>Fech. res. c.u.</p>
        <input placeholder='04/03/2022'/>
      </div>
      <div className={styles.padronItem}>
        <p>N° de res.</p>
        <input placeholder='0807-2022-R-UNE'/>
      </div>
      <div className={styles.padronItem}>
        <p>Grado</p>
        <input placeholder='BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN'/>
      </div>
      <div className={styles.padronItem}>
        <p>Ap. Paterno</p>
        <input placeholder='AUQUI'/>
      </div>
      <div className={styles.padronItem}>
        <p>Ap. Materno</p>
        <input placeholder='ORE'/>
      </div>
      <div className={styles.padronItem}>
        <p>Nombres</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Facultad</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Fech. con. fac.</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Fech. diploma</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Cód. de univ.</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Tipo de doc.</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>N° de doc.</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Abrev. del grado</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Mod. de otención</p>
        <input placeholder='AUTOMATICO'/>
      </div>
      <div className={styles.padronItem}>
        <p>Mod. de estudio</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Fech. de res.</p>
        <input placeholder='14/03/2022'/>
      </div>
      <div className={styles.padronItem}>
        <p>Tipo de diploma</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Reg. en libro</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Reg. en folio</p>
        <input/>
      </div>
      <div className={styles.padronItem}>
        <p>Cód. de alumno</p>
        <input/>
      </div>
    </div>
  )
}