import style from'../styles/globals.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'PokeNext',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="../images/favicon.ico" />
      <body className={style.body}>
        <NavBar />
        <main className={style.mainContainer}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
