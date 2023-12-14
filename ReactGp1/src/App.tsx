import './App.css'

import FirstComp from './Components/FirstComp.jsx'
import ItemList from './Components/ItemList.js'

export default function App() {
  return (
    <>
      <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
      crossOrigin="anonymous"/>
      
      <FirstComp texto="Me transforme em maiúsculo." />
      <ItemList />
    </>
  )
}

