const Footer = () => {
  return (
    <>
      <footer className="w-full min-h-2 flex items-center justify-between py-4 px-8 box-border bg-red-900 text-white transition-colors duration-0.3s z-1000">
      <div className="footer-logo">
        <h2 className="text-xl">GourmetOn</h2>
      </div>

      <nav className="items-center flex space-x-4">
        <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#home">Home</a>
        <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#publico">Público</a>
        <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#galeria">Galeria</a>
        <a className="text-white decoration-0 hover:underline hover:font-bold hover:text-gray-200 text-base" href="#contato">Contato</a>
      </nav>

      <p className="footer-copy text-white text-sm">
        © 2026 Off-Grid. Todos os direitos reservados.
      </p>
    </footer>
    </>
  )
}

export default Footer
