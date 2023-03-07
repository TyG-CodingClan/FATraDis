import { Routes, Route, BrowserRouter } from "react-router-dom"
import { NavBar } from "../components"
import { Contacto, Home, Servicios } from "./"

export const MainPages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Servicios" element={<Servicios/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
    </BrowserRouter>
  )
}


