import { useEffect } from "react"

const useTitulo = (titulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Educación IT - ${titulo}`
    }, [])

}

export default useTitulo