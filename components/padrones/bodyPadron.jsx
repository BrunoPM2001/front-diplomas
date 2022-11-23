import styles from '../../styles/Padrones.module.css'

export default function BodyPadron ({ loading, padron, update }) {

  if (loading) {
    return (
      <div>Cargando</div>
    )
  } else {
    return (
      <div className={styles.itemsCont}>
        <div className={styles.padronItem}>
          <p>Registro</p>
          <input name='REG_REGISTRO' value={padron.REG_REGISTRO} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Fech. res. c.u.</p>
          <input name='FEC_RESO_CU' value={padron.FEC_RESO_CU} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>N° de res.</p>
          <input name='RESO_NUM' value={padron.RESO_NUM} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Grado</p>
          <input name='DEN_GRAD' value={padron.DEN_GRAD} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Ap. Paterno</p>
          <input name='APEPAT' value={padron.APEPAT} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Ap. Materno</p>
          <input name='APEMAT' value={padron.APEMAT} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Nombres</p>
          <input name='NOMBRE' value={padron.NOMBRE} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Facultad</p>
          <input name='FAC_NOM' value={padron.FAC_NOM} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Fech. con. fac.</p>
          <input name='F_FEC_CON_FAC_ESC' value={padron.F_FEC_CON_FAC_ESC} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Fech. diploma</p>
          <input name='DIPL_FEC' value={padron.DIPL_FEC} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Cód. de univ.</p>
          <input name='COD_UNIV' value={padron.COD_UNIV} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Tipo de doc.</p>
          <input name='DOCU_TIP' value={padron.DOCU_TIP} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>N° de doc.</p>
          <input name='DOCU_NUM' value={padron.DOCU_NUM} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Abrev. del grado</p>
          <input name='ABRE_GYT' value={padron.ABRE_GYT} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Mod. de otención</p>
          <input name='MOD_OBT' value={padron.MOD_OBT} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Mod. de estudio</p>
          <input name='MOD_EST' value={padron.MOD_EST} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Fech. de res.</p>
          <input name='RESO_FEC' value={padron.RESO_FEC} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Tipo de diploma</p>
          <input name='DIPL_TIP_EMI' value={padron.DIPL_TIP_EMI} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Reg. en libro</p>
          <input name='REG_LIBRO' value={padron.REG_LIBRO} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Reg. en folio</p>
          <input name='REG_FOLIO' value={padron.REG_FOLIO} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
        <div className={styles.padronItem}>
          <p>Cód. de alumno</p>
          <input name='COD_ALU' value={padron.COD_ALU} onChange={update} placeholder='No deje este apartado en blanco'/>
        </div>
      </div>
    )
  }
}