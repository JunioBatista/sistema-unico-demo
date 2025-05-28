import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Filas from './pages/Filas'
import { FilasContextProvider } from './context/Filas.context'
import Header from './components/Header'


function App() {

  return (
    <>
      <BrowserRouter>
        <FilasContextProvider>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/filas" element={<Filas />}> </Route>
          </Routes>
        </FilasContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
