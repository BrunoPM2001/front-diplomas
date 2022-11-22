import { useRouter } from 'next/navigation'
import styles from '../../styles/Padrones.module.css'

export default function Resultados ({ loading, padrones = [] }) {

  const router = useRouter()

  const sendTo = (refer) => {
      router.push("/padrones/" + refer)
  }

  if (!loading) {
    return (
      <div className={styles.boxContainer}>
        <h1>Resultados de la búsquedas</h1>
        <div className={styles.resultTable}>
          <table>
            <tr>
              <th>Registro</th>
              <th>Fech. res. c.u.</th>
              <th>N° de res.</th>
              <th>Grado</th>
              <th>Ap. Paterno</th>
              <th>Ap. Materno</th>
              <th>Nombres</th>
              <th>Facultad</th>
              <th>Fech. con. fac.</th>
              <th>Fech. diploma</th>
              <th>Cód. de univ.</th>
              <th>Tipo de doc.</th>
              <th>N° de doc.</th>
              <th>Abrev. del grado</th>
              <th>Mod. de otención</th>
              <th>Mod. de estudio</th>
              <th>Fech. de res.</th>
              <th>Tipo de diploma</th>
              <th>Reg. en libro</th>
              <th>Reg. en folio</th>
              <th>Cód. de alumno</th>
              <th>Dni del generador</th>
              <th>Estado</th>
            </tr>
            {
              padrones.map(element => (
                <tr className={styles.hoverEle} onClick={() => sendTo(element.REG_REGISTRO)}>
                  <td>{element.REG_REGISTRO}</td>
                  <td>{element.FEC_RESO_CU}</td>
                  <td>{element.RESO_NUM}</td>
                  <td>{element.DEN_GRAD}</td>
                  <td>{element.APEPAT}</td>
                  <td>{element.APEMAT}</td>
                  <td>{element.NOMBRE}</td>
                  <td>{element.FAC_NOM}</td>
                  <td>{element.F_FEC_CON_FAC_ESC}</td>
                  <td>{element.DIPL_FEC}</td>
                  <td>{element.COD_UNIV}</td>
                  <td>{element.DOCU_TIP}</td>
                  <td>{element.DOCU_NUM}</td>
                  <td>{element.ABRE_GYT}</td>
                  <td>{element.MOD_OBT}</td>
                  <td>{element.MOD_EST}</td>
                  <td>{element.RESO_FEC}</td>
                  <td>{element.DIPL_TIP_EMI}</td>
                  <td>{element.REG_LIBRO}</td>
                  <td>{element.REG_FOLIO}</td>
                  <td>{element.COD_ALU}</td>
                  <td>{element.dniAct}</td>
                  <td>{element.estado}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </div>
    )
  } else {
    return (<div>Cargando...</div>)
  }
}