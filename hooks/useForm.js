"use client"

import { useState } from 'react'

const useLoginForm = () => {
  //  Estado para almacenar la data
  const [loginForm, setLoginForm] = useState({
    dni: '',
    password: ''
  })

  //  Actualizar datos del estado
  const updateLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  return { loginForm, updateLoginForm }
}

const usePadron = () => {
  //  Estado para un solo padrón
  const [padron, setPadron] = useState({
    REG_REGISTRO: "",
    FEC_RESO_CU: "",
    RESO_NUM: "",
    DEN_GRAD: "",
    APEPAT: "",
    APEMAT: "",
    NOMBRE: "",
    FAC_NOM: "",
    F_FEC_CON_FAC_ESC: "",
    DIPL_FEC: "",
    COD_UNIV: "",
    DOCU_TIP: "",
    DOCU_NUM: "",
    ABRE_GYT: "",
    MOD_OBT: "",
    MOD_EST: "",
    RESO_FEC: "",
    DIPL_TIP_EMI: "",
    REG_LIBRO: "",
    REG_FOLIO: "",
    COD_ALU: "",
    dniAct: "",
    estado: ""
  })

  //  Actualizar datos del padrón
  const updatePadron = (e) => {
    setPadron({
      ...padron,
      [e.target.name]: e.target.value
    })
  }

  return { padron, setPadron, updatePadron }
}

export { useLoginForm, usePadron }