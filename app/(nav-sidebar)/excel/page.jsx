import styles from '../../../styles/Excel.module.css'
import LoadCard from "../../../components/excel/cards";

const cards = [
  {
    tittle: "Cargar padrones",
    accion: "Cargar",
    desc: "Registrar nuevos padrones(se obviarán los duplicados)."
  },
  {
    tittle: "Cargar padrones",
    accion: "Cargar",
    desc: "Registrar nuevos padrones(se obviarán los duplicados)."
  },
  {
    tittle: "Cargar padrones",
    accion: "Cargar",
    desc: "Registrar nuevos padrones(se obviarán los duplicados)."
  }
]

export default function Page () {
  return (
    <div className={styles.container}>
      {
        cards.map(element => {
          return (
            <LoadCard
              tittle={element.tittle}
              accion={element.accion}
              desc={element.desc}
            />
          )
        })
      }
    </div>
  )
}