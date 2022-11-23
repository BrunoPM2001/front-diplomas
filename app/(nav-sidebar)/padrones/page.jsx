"use client"

import { useState, useEffect } from "react"
import { getAllP } from "../../../api/padrones"
import Resultados from "../../../components/padrones/resultados"
import SearchPadron from "../../../components/padrones/search"

export default function Page () {

  //  Estados para la data del padrón y su carga
  const [padrones, setPadrones] = useState()
  const [loading, setLoading] = useState(true)

  //  Llamada a la API
  useEffect(() => {
    getAllP().then(data => setPadrones(data))
    setLoading(false)
  }, [])

  return (
    <div className="bodyContent">
      <SearchPadron/>
      <Resultados
        loading={loading}
        padrones={padrones}
      />
    </div>
  )
}