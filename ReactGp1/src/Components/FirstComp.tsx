import './FirstComp.css'

/* export default function FirstComp() {
  
  return (
    <>
      <h1>Texto para maiúsculo abaixo:</h1>
    </>
  )
} */

interface Props{
  texto: string
}

export default function FirstComp(props: Props) {
    const textoInserido = props.texto;
    const textoMaiusculo = textoInserido.toUpperCase();
    
    return (
      <>
        <h1>Texto para maiúsculo abaixo:</h1>
        <h2>{textoMaiusculo.toUpperCase()}</h2>
      </>
    )
}