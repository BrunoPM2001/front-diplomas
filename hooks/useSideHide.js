"use client"

import { useState } from 'react'

const useSideHide = () => {
  //  Estado para ocultar/mostrar el sidebar
  const [openState, setOpenState] = useState(true)

  const changeOpenState = () => { setOpenState(!openState) }

  return { openState, changeOpenState }
}

export { useSideHide }