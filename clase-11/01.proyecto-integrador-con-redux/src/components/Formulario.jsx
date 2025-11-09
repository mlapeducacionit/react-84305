import { useEffect, useState } from "react"


const Formulario = () => { // props = { handleAgregarProducto }

    const handleAgregarProducto = ''
    const handleEditarProducto = ''
    const setProductoAEditar = ''
    const productoAEditar = ''


    const formInicial = { 
        id: null,
        nombre: '',
        categoria: '',
        precio: 0
    }

    useEffect(() => {
//      console.log('Se está editando un producto...')

      productoAEditar  ? setForm(productoAEditar) : setForm(formInicial)

    }, [productoAEditar])
    

   const [form, setForm] = useState(formInicial)
   //console.log(form) // { nombre: '', categoria: '', precio: 0 }

  // Captura de datos controlada.
  const handleSubmit = (e) => {
    e.preventDefault() // <--- detengo el comportamiento por defecto
//    console.log('Se controla la información y se envía...')

    if ( form.id ) {
        handleEditarProducto(form)
    } else {
        handleAgregarProducto(form)
    }

    handleReset()
  }

  const handleChange = (e) => {
    //console.log(e.target.name) // nombre: 
    //console.log(e.target.value) // M

    const formuModificado = {
        ...form,        
        [e.target.name]: e.target.value
    }
    //debugger
    // console.log(formuModificado) // <---- un clon de form

    setForm(formuModificado)

    // handleValidation(form)

  }

  const handleReset = () => {
    setForm(formInicial)
    setProductoAEditar(null)
  }

  const handleTexto = (textoUno, textoDos) => {
    return productoAEditar ? textoUno : textoDos
  }

  return (
    <>
        <h2 className="text-2xl font-semibold mb-2">Formulario de { handleTexto('edición', 'carga') }</h2>
        <form 
            onSubmit={handleSubmit} 
            className="border border-green-500 rounded-2xl w-full max-w-md px-6 py-4 mb-10"
        >

        {/* Campo Nombre */}
        <div className="mb-4">
            <label 
                htmlFor="lbl-nombre" 
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                    Nombre
            </label>
            <input 
                type="text"
                id="lbl-nombre"
                name="nombre"
                placeholder="Escriba el nombre del producto. Ej: PC, Notebook"
                className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
                value={form.nombre}
                onChange={handleChange}
            />
        </div>
        {/* Campo Categoría */}
        <div className="mb-4">
            <label 
                htmlFor="lbl-categoria" 
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                    Categoría
            </label>
            <input 
                type="text"
                id="lbl-categoria"
                name="categoria"
                placeholder="Escriba la categoría del producto. Ej: Hogar, Electronica, Informatica"
                className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
                value={form.categoria}
                onChange={handleChange}
            />
        </div>
        {/* Campo Precio */}
        <div className="mb-4">
            <label 
                htmlFor="lbl-precio" 
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                    Precio
            </label>
            <input 
                type="number"
                id="lbl-precio"
                name="precio"
                placeholder="Escriba el precio del producto. Ej: 125.20, 33.30"
                className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
                value={form.precio}
                onChange={handleChange}
            />
        </div>

        <div className="flex gap-3 mb-6">
            <button onClick={handleReset} type="reset" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer">Limpiar</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
                {productoAEditar ? 'Editar' : 'Guardar' } 
            </button>
        </div>

        </form>
    </>
  )
}

export default Formulario