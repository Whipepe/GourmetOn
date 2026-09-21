import {Link } from 'react-router-dom'
import Contato from '../pages/Contato'

const Footer = () => {
  return (
    
      <footer className="w-full flex min-h-2 items-center justify-between py-4 px-8 box-border bg-red-900 text-white transition-colors duration-0.3s z-1000">
        <div className="footer-logo">
          <h2 className="text-xl">GourmetOn</h2>
        </div>

        <nav className="items-center flex space-x-4">
          <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#home">Instagram</a>
          <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#publico">Youtube</a>
          <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#galeria">X (Twitter)</a>
          <Link to='/Contato' href="#contato" className="hover:underline hover:font-bold text-white decoration-0 text-md">Contatos</Link>
        </nav>

        <p className="footer-copy text-white text-sm">
          © 2026 Off-Grid. Todos os direitos reservados.
        </p>
      </footer>
    
  )
}

export default Footer
