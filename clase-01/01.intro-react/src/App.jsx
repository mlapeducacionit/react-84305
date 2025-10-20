// rafce
// Un componente es un función. Y para que esa función se pueda utilizar en otro lado. Necesito exportarlarla. (Estoy creando un modulo)
// ! Utilitarios, Handlers
// handle-http.js <---- modulo de js
// ! Componentes de React
// App.jsx <---- La inicial en maysuculas
// TituloPrincipe.jsx 
// ! Hook Personalizados
// useNombreHook

import Parrafo from './components/Parrafo'
import TituloPrincipal from './components/TituloPrincipal'
import TituloSecundario from './components/TituloSecundario'
import datosParrafos from './constants/datos-parrafos'

const App = () => {
  // https://es.wikipedia.org/wiki/JSX_(JavaScript)
  // https://legacy.reactjs.org/docs/introducing-jsx.html
  // https://react.dev/learn/writing-markup-with-jsx
  // Lo que retornar las funciones (Componentes) no es HTML -> JSX -> Javascript + XML (Extensión JS) <--- Facebook (Meta)
  // Cuando retorno. No puedo retornar más de un componente, elemento.
  // JSX Fragment -> <></>
  // JSX Fragment -> <React.Fragment></React.Fragment>

  console.log(datosParrafos)

  return (
    <>
      <TituloPrincipal /> {/* Cierre en la etiqueta de apertura */}
      <TituloSecundario texto="Título Secundario" nro="1" color="crimson"></TituloSecundario> {/* Etiqueta apertura y etiqueta cierre */}

      <Parrafo texto={datosParrafos[0].texto} numero={datosParrafos[0].numero} />

      <TituloSecundario texto="Titulo Secundario" nro="2" color="violet" /> 

      <Parrafo texto={datosParrafos[1].texto} numero={datosParrafos[1].numero} />

      <TituloSecundario texto="Titulo Secundario" nro="3" color="lightblue" />

      <Parrafo texto={datosParrafos[2].texto} numero={datosParrafos[2].numero} />

      <TituloSecundario texto="Titulo Secundario" nro="4" color="lightgreen" />
    </>
  )
}

export default App