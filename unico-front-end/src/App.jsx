import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Filas from './pages/Filas'
import { SearchResultsProvider } from './context/filas.context'
import Header from './components/header'


function App() {

  return (
    <>
    <BrowserRouter>
    <SearchResultsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/filas" element={<Filas />}>
        </Route>
      </Routes>
      </SearchResultsProvider>
    </BrowserRouter>
    </>
  )
}

export default App
