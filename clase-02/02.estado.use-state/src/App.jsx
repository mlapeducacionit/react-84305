// rafce

import Parrafo from "./components/Parrafo"
import Post from "./components/Post"
import TituloPost from "./components/TituloPost"
import TituloPrincipal from "./components/TituloPrincipal"
import listadoPosts from "./constants/posts"


const App = () => {

  const arrayParrafos = [
    { texto: 'Parrafo 1 -> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure.'},
    { texto: 'Parrafo 2 -> Lorem ipsum dolor sit amet.' },
    { texto: 'Parrafo 3 -> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum officia accusantium inventore numquam maiores voluptatibus officiis qui excepturi aliquid. Sapiente!' },
  ]

  // console.log(listadoPosts)
  
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

      <hr className="my-5" />
    
      {/* React al generar elementos dinnamicamente necesita que le pasemos a cada elemento una props llamada key donde le vamos a colocar un identificador unico para sepa que cada uno de esos elementos no se repite */}
      {
        listadoPosts.map((post) => ( 
          <Post key={post.id}>
            <TituloPost texto={post.titulo} />
            <Parrafo data={post.body} />
          </Post>
        ))
      }


    </div>
  )
}

export default App