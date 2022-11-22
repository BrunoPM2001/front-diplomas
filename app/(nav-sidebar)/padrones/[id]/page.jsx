import BodyPadron from '../../../../components/padrones/bodyPadron'
import HeadPadron from '../../../../components/padrones/headPadron'
import styles from '../../../../styles/Padrones.module.css'

export default function Page () {
  return (
    <div className="bodyContent">
      <div className={styles.padronContainer}>
        <HeadPadron/>
        <BodyPadron/>
      </div>
    </div>
  )
}