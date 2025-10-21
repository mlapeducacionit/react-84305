// rafce

import Parrafo from "./components/Parrafo"
import Post from "./components/Post"
import TituloPost from "./components/TituloPost"
import TituloPrincipal from "./components/TituloPrincipal"


const App = () => {

  const arrayParrafos = [
    { texto: 'Parrafo 1 -> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure.'},
    { texto: 'Parrafo 2 -> Lorem ipsum dolor sit amet.' },
    { texto: 'Parrafo 3 -> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum officia accusantium inventore numquam maiores voluptatibus officiis qui excepturi aliquid. Sapiente!' },
  ]

  return (
    <div className="container mx-auto">
      <TituloPrincipal />
      <TituloPrincipal />
      <TituloPrincipal />
      <TituloPrincipal />
      <TituloPrincipal />
      <TituloPrincipal />
      <TituloPrincipal />

      <Parrafo data={arrayParrafos[0].texto} />
      <Parrafo data={arrayParrafos[1].texto} />
      <Parrafo data={arrayParrafos[2].texto} />

      <hr />

      <Post>
        <TituloPost />
        <Parrafo data="Este es el cuerpo del post!" />
      </Post>

    </div>
  )
}

export default App