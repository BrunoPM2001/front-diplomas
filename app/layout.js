import { Roboto }  from '@next/font/google'
import styles from '../styles/globals.css'

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
        {children}
      </body>
    </html>
  )
}