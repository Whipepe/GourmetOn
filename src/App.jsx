import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import Apresentacao from './pages/Apresentacao'
import Contato from './pages/Contato'
import Depoimentos from './pages/Depoimentos'
import Funcionalidades from './pages/Funcionalidades'
import Hero from './pages/Hero'


function App() {
  return (
   <>
        <Router>
      <Topbar />

      <main>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/apresentacao" element={<Apresentacao/>} />
          <Route path="/funcionalidades" element={<Funcionalidades/>} />
          <Route path="/depoimentos" element={<Depoimentos/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </main>

      <Footer />
    </Router>
   </> 
  )
}

export default App