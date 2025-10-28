import { useEffect } from "react"

const ProcesoEjecucion = () => {

   // ! 1. Etapa Arranque (Montaje)
   useEffect(() => {
     const refInt = setInterval(() => {
        console.log(Date.now()) // Arranco el proceso cuando el componente se monta
     }, 2000)
     return () => {
        clearInterval(refInt) // Detengo el proceso cuando el componente se desmonta
        // new AbortController()
     }
   }, [])
   

  return (
    <div>ProcesoEjecucion</div>
  )
}

export default ProcesoEjecucion