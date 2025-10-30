import { useEffect } from "react"

const useTitulo = (texto) => {

    useEffect(() => {
      document.title = `Educación IT - ${texto}`
    }, [])
    
}

export default useTitulo