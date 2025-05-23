import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Filas from './pages/filas'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/filas" element={<Filas />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
