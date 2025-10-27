/* rafce */

import { useState } from "react"

const Hijo2 = () => {

  const [mensaje, setMensaje] = useState("Esto es un mensaje")

  return (
    <>
        <h2>Hijo2</h2>
        <p>{mensaje}</p>
    </>
  )
}

export default Hijo2