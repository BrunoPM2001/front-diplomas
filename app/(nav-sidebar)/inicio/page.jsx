import styles from "../../../styles/Inicio.module.css"
import Link from "next/link"

const cards = [
  {
    tittle: "Padrones",
    text: `Puedes ver y actualizar los padrones ya registrados dentro del sistema.`,
    link: "/padrones"
  },
  {
    tittle: "Previsualizar diplomas según padrones de excel",
    text: `Previsualiza diplomas en base a padrones que cargues de excel.`,
    link: "/excel"
  },
  {
    tittle: "Genera padrones",
    text: `Importa los padrones en excel que tengas para guardar data aquí.`,
    link: "/excel"
  },
  {
    tittle: "Diplomas",
    text: `Genera diplomas según los padrones que se tengan registrados en el sistema.`,
    link: "/padrones"
  }
]

export default function Page () {
  return (
    <div className={styles.container}>
      {
        cards.map(element => {
          return (
            <div className={styles.cardContainer}>
              <Link key={element.tittle} href={element.link}>
                <h2>{element.tittle} &rarr;</h2>
                <p>{element.text}</p>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}