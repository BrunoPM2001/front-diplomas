"use client"
import { useRouter } from 'next/navigation'
import styles from '../../styles/Padrones.module.css'

export default function Resultados () {

  const router = useRouter()

  const sendTo = (refer) => {
      router.push("/padrones/" + refer)
  }

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
          <tr className={styles.hoverEle} onClick={() => sendTo("B.U.C.E.0535-2022")}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
          <tr className={styles.hoverEle}>
            <td>B.U.C.E.0535-2022</td>
            <td>04/03/2022</td>
            <td>0807-2022-R-UNE</td>
            <td>BACHILLER UNIVERSITARIO EN CIENCIAS DE LA EDUCACIÓN</td>
            <td>AUQUI</td>
            <td>ORE</td>
            <td>FREDY STICK</td>
            <td>TECNOLOGIA</td>
            <td>31/01/2022</td>
            <td>12/04/2022</td>
            <td>025</td>
            <td>1</td>
            <td>71294032</td>
            <td>B</td>
            <td>AUTOMATICO</td>
            <td>P</td>
            <td>14/03/2022</td>
            <td>O</td>
            <td>02</td>
            <td>0535</td>
            <td>20161218</td>
            <td>72458762</td>
            <td>NO</td>
          </tr>
        </table>
      </div>
    </div>
  )
}