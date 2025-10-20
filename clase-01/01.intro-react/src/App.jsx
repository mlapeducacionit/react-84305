// rafce
// Un componente es un función. Y para que esa función se pueda utilizar en otro lado. Necesito exportarlarla. (Estoy creando un modulo)
// ! Utilitarios, Handlers
// handle-http.js <---- modulo de js
// ! Componentes de React
// App.jsx <---- La inicial en maysuculas
// TituloPrincipe.jsx 
// ! Hook Personalizados
// useNombreHook

import TituloPrincipal from "./components/TituloPrincipal"
import TituloSecundario from './components/TituloSecundario'

const App = () => {
  // https://es.wikipedia.org/wiki/JSX_(JavaScript)
  // https://legacy.reactjs.org/docs/introducing-jsx.html
  // https://react.dev/learn/writing-markup-with-jsx
  // Lo que retornar las funciones (Componentes) no es HTML -> JSX -> Javascript + XML (Extensión JS) <--- Facebook (Meta)
  // Cuando retorno. No puedo retornar más de un componente, elemento.
  // JSX Fragment -> <></>
  // JSX Fragment -> <React.Fragment></React.Fragment>
  return (
    <>
      <TituloPrincipal /> {/* Cierre en la etiqueta de apertura */}
      <TituloSecundario></TituloSecundario> {/* Etiqueta apertura y etiqueta cierre */}
      <TituloSecundario />
      <TituloSecundario />
      <TituloSecundario />
    </>
  )
}

export default App