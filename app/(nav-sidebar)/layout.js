import Sidebar from "../../components/general/Sidebar"
import Navbar from "../../components/general/Navbar"
import StatusBar from "../../components/general/Statusbar"

export default function RootLayout({ children }) {

  return (
    <html>
      <head></head>
      <body>
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