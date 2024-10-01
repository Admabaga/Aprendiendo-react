import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Calculadora from './Componentes/Calculadora/Calculadora';
import IMC from './Componentes/IMC/IMC';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/calculadora' element={<Calculadora/>}></Route>
      <Route path='/imc' element={<IMC/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
