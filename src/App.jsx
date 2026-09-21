import Footer from './components/Footer'
import Topbar from './components/Topbar'
import Apresentacao from './components/Apresentacao'
import Contato from './components/Contato'
import Depoimentos from './components/Depoimentos'
import Funcionalidades from './components/Funcionalidades'
import Hero from './components/Hero'


function App() {
  return (
   <>
    <Topbar/>
    <div className='scroll-smooth'>
      <main>
        <Hero/>
        <Apresentacao/>
        <Funcionalidades/>
        <Depoimentos/>
        <Contato/>
      </main>
    </div>
    <Footer/>
   </> 
  )
}

export default App