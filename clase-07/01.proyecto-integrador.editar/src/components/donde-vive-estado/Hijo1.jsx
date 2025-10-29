
const Hijo1 = ( { setMensaje } ) => { // props = { setMensaje }

  const handleClick = () => {
    setMensaje('Hola mundo')
  }
  return (
    <>
        <h2>Hijo1</h2>
        <button onClick={handleClick} 
            className="cursor-pointer text-white rounded-sm bg-violet-500 hover:bg-violet-600 px-4 py-2"
        >Cambiar mensaje</button>
    </>
  )
}

export default Hijo1