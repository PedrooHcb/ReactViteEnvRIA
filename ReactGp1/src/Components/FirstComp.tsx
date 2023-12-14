
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
      <div className='form-group p-2 border border-primary rounded '>
        <h2>Texto em maiúsculo abaixo:</h2>
        <h5>{textoMaiusculo.toUpperCase()}</h5>
      </div>
    )
}