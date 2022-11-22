import styles from '../../styles/Padrones.module.css'

import FilterIcon from '../icons/filter'
import SearchIcon from '../icons/search'
export default function SearchPadron () {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFilter}>
        <FilterIcon/>
        <p>Elegir filtro de búsqueda</p>
      </div>
      <div className={styles.selectedFilter}>
        Registro
      </div>
      <div className={styles.inputSearch}>
        <SearchIcon stroke="#999999"/>
        <input type="text" placeholder='Buscar...'/>
      </div>
      <div className={styles.searchButton}>
        <SearchIcon/>
        <p>BUSCAR</p>
      </div>
    </div>
  )
}