// rafce
import { useState } from 'react'
import './InputControlado.css'
import styles from './InputControlado.module.css'

const InputControlado = () => {

  const [nombre, setNombre] = useState("")

  /* 
    const input = document.querySelector('input')
    input.addEventListener('change', (e) => {
      console.log(e.target.value)
    })
  */

    const handleChange = (e) => {
      //console.log(e)
      //debugger
      setNombre(e.target.value)
    }

  return (
    <div className="border border-amber-500 m-4 p-2">
      <h2 className={styles.colorH2}>InputControlado</h2>
      <hr />

      <input 
        className='border border-black rounded-md p-2 bg-gray-100'
        type="text" value={nombre}
        /* onChange={(e) => setNombre(e.target.value)} */
        onChange={handleChange}
      />

      <p>Hola, {nombre || 'visitante'}</p>
    </div>
  )
}

export default InputControlado