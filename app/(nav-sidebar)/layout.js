"use client"

import { useSideHide } from "../../hooks/useSideHide"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function RootLayout({ children }) {

  const { openState, changeOpenState } = useSideHide()

  return (
    <html>
      <head></head>
      <body>
        <div className="sideBody">
          <Sidebar menuState={openState}/>
          <div className="bodyParte">
            <Navbar changeMenuState={changeOpenState}/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}