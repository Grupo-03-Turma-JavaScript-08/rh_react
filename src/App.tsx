import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Funcionarios from './pages/Funcionarios'
import Sobre from './pages/Sobre'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar /> {/* <- Aqui */}
      <div style={{ display: "flex", backgroundColor: "#E3EDF9"}}>
        <div style={{ flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/sobrenos" element={< Sobre/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
