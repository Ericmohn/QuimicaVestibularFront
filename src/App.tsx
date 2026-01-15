import { RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import { Rotas } from './pages/Rotas'
import axios from 'axios'
function App() {
  return (
    <>
      <RouterProvider router={Rotas} />
      <EstiloGlobal />
    </>
  )
}

export default App
