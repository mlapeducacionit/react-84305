/* rafce */
import { useState } from "react" // <---
import Hijo1 from "./Hijo1"
import Hijo2 from "./Hijo2"

const Padre = () => {

  const [mensaje, setMensaje] = useState("Esto es un mensaje") // <---

  return (
    <>
        <h1>Padre</h1>
        <Hijo1 setMensaje={setMensaje} />
        <Hijo2 mensaje={mensaje} />
    </>
  )
}

export default Padre