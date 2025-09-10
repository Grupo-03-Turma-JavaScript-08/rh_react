import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Funcionarios from './pages/Funcionarios'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar /> {/* <- Aqui */}
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/sobre" element={<h1>Sobre Nós</h1>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
