"use client"
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from '../../styles/Excel.module.css'
import FileUpload from '../icons/file'

export default function Dropzone () {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ maxFiles: 1 })

  const [file, setFile] = useState([])

  return (
    <div className={styles.dropzone}>
      <input type="file"/>
      <p>Arrastre el padrón de excel aquí o búsquelo en su explorador de archivos</p>
      <FileUpload/>
    </div>
  )
}