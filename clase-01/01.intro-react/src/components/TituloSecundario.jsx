//rafce

const TituloSecundario = (props) => { // props -> {}

  console.log(props)
  return (
    <h2 style={{ 'color': props.color }}>{props.texto} {props.nro}</h2>
  )
}

export default TituloSecundario