import { useSelector } from "react-redux"

const Contador = () => {

  const { contador } = useSelector(store => {
    console.log(store)
    return store.contador
  })
  console.log(contador)


  return (
    <div>Contador</div>
  )
}

export default Contador