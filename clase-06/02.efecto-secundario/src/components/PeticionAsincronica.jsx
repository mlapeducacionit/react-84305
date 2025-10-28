import { useEffect } from "react"
import { useState } from "react"
import Spinner from "./Spinner"

const PeticionAsincronica = () => {

  const [posts, setPosts] = useState(null) // null -> petición -> (100)[]

  const url = 'https://jsonplaceholder.typicode.com/posts/'

  

  /* useEffect(async() => {  // ! EL CALLBACK no puede ser asincronico */
  useEffect(() => {
      const controller = new AbortController()
      const signal = controller.signal

     const peticionAsincronicaPosts = async () => {

        try {
            
            const res = await fetch(url, { method: 'GET', signal })

            if ( !res.ok ) {
                throw new Error('No se pudo completar la solicitud')
            }
            const posts = await res.json()
            console.log(posts)
            setPosts(posts)

        } catch (error) {
            if (error.name === 'AbortError' ) {
                console.log('Petición cancelada')
            } else {
                console.error(error)
            }
        }
    }

    peticionAsincronicaPosts()
    // Desmontaje del componente
    return () => {
        controller.abort() // Cancelar la petición si aún sigue activa
    }

  }, [])
  

  return (
    <>
        <h3 className="text-4xl text-amber-700 mt-5">Peticion Asincronica</h3>
        <hr />
        {
            posts ? (
                posts.slice(0, 5).map(post => (
                    <p key={post.id}>{post.title}</p> /* post -> { } | post.title -> '' */
                ))
            ) : (
                <Spinner />
            )
        }
    </>
  )

}

export default PeticionAsincronica