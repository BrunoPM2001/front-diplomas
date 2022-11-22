"use client"

import { generateFromExcelP, previsualizarDiplomaSegunPadronP } from '../../../api/padrones'

import styles from '../../../styles/Excel.module.css'
import LoadCard from "../../../components/excel/cards";

const cards = [
  {
    tittle: "Cargar padrones",
    accion: "Cargar",
    desc: "Registrar nuevos padrones(se obviarán los duplicados).",
    function: generateFromExcelP
  },
  {
    tittle: "Cargar padrones",
    accion: "Cargar",
    desc: "Registrar y actualizar padrones (se actualizarán los duplicados).",
    function: generateFromExcelP
  },
  {
    tittle: "Cargar padrón",
    accion: "Previsualizar",
    desc: "Previsualizar el diploma en base a un padrón, si adjunta un padrón con varios registros solo se tomará el primero.",
    function: previsualizarDiplomaSegunPadronP
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
              method={element.function}
            />
          )
        })
      }
    </div>
  )
}