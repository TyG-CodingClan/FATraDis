// import { Route, Routes } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { Home, Contacto, Servicios, Nosotros, Provincia } from './pages'
import './styles/App.scss'


function App() {
  return (
    <div className="app">
      < NavBar />

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/servicios' element={<Servicios/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/provincia' element={<Provincia/>} />
      </Routes>

     
    </div>
  )
}

export default App  
