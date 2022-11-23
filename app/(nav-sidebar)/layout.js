import { Roboto }  from '@next/font/google'
import Sidebar from "../../components/general/Sidebar"
import Navbar from "../../components/general/Navbar"
import StatusBar from "../../components/general/Statusbar"

const font = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {


  return (
    <html>
      <head></head>
      <body className={font.className}>
        <div className="sideBody">
          <Sidebar/>
          <div className="bodyParte">
            <Navbar/>
            <StatusBar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}