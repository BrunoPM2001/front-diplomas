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

const usePadron = ( data ) => {
  //  Estado para un solo padrón
  const [padron, setPadron] = useState({
    REG_REGISTRO: data.REG_REGISTRO,
    FEC_RESO_CU: data.FEC_RESO_CU,
    RESO_NUM: data.RESO_NUM,
    DEN_GRAD: data.DEN_GRAD,
    APEPAT: data.APEPAT,
    APEMAT: data.APEMAT,
    NOMBRE: data.NOMBRE,
    FAC_NOM: data.FAC_NOM,
    F_FEC_CON_FAC_ESC: data.F_FEC_CON_FAC_ESC,
    DIPL_FEC: data.DIPL_FEC,
    COD_UNIV: data.COD_UNIV,
    DOCU_TIP: data.DOCU_TIP,
    DOCU_NUM: data.DOCU_NUM,
    ABRE_GYT: data.ABRE_GYT,
    MOD_OBT: data.MOD_OBT,
    MOD_EST: data.MOD_EST,
    RESO_FEC: data.RESO_FEC,
    DIPL_TIP_EMI: data.DIPL_TIP_EMI,
    REG_LIBRO: data.REG_LIBRO,
    REG_FOLIO: data.REG_FOLIO,
    COD_ALU: data.COD_ALU,
    dniAct: data.dniAct,
    estado: data.estado
  })

  //  Actualizar datos del padrón
  const updatePadron = (e) => {
    setPadron({
      ...padron,
      [e.target.name]: e.target.value
    })
  }

  return { padron, updatePadron }
}

export { useLoginForm }