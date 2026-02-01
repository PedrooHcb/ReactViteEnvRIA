import './FirstComp.css'

// export default function FirstComp() {
  
//   return (
//     <>
//       <h1>Texto para maiúsculo abaixo:</h1>
//     </>
//   )
// }

export default function FirstComp({texto, outra}) {
    return (
      <>
        <h1>Texto para maiúsculo abaixo:</h1>
        <h2>{texto.toUpperCase()}</h2>
      </>
    )
}