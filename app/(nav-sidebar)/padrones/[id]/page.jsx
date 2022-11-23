"use client"

import { useState, useEffect } from 'react'
import { getOneP } from '../../../../api/padrones'
import { usePadron } from '../../../../hooks/useForm'
import BodyPadron from '../../../../components/padrones/bodyPadron'
import HeadPadron from '../../../../components/padrones/headPadron'
import styles from '../../../../styles/Padrones.module.css'

export default function Page ({ params }) {
  
  const { padron, setPadron, updatePadron } = usePadron()
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    getOneP(params.id).then(data => setPadron(data))
    setLoading(false)
  }, [])

  return (
    <div className="bodyContent">
      <div className={styles.padronContainer}>
        <HeadPadron
          loading={loading}
          padron={padron}
          reg={params.id}
        />
        <BodyPadron
          loading={loading}
          padron={padron}
          update={updatePadron}
        />
      </div>
    </div>
  )
}