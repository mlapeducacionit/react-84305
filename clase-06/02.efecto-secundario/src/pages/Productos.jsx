import { useEffect } from "react"

const Productos = () => {

  useEffect(() => {
    document.title = 'Educación IT - Productos'
  }, [])

  return (
    <div>Productos</div>
  )
}

export default Productos