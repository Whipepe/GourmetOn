const Footer = () => {
  return (
    <>
      <footer className="w-full min-h-2 flex items-center justify-between py-4 px-8 box-border bg-red-900 text-white transition-colors duration-0.3s z-1000">
      <div className=" flex-1 flex justify-start footer-logo">
        <h2 className="text-xl">GourmetOn</h2>
      </div>
      <nav className="flex-1 flex justify-center space-x-4">
        <a href="mailto:gorumetoncontato@gourmeton.com" className="text-white hover:underline">
          Email de Contato
        </a>
        <a href="https://www.instagram.com/gourmeton" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          Instagram
        </a>
        <a href="https://www.x.com/gourmeton" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          X (Twitter)
        </a>
        <a href="" className=" text-white hover:underline">
          Termos de Uso
        </a>
      </nav>
      <div className="flex-1 flex justify-end">
        <p className="footer-copy text-white text-sm">
          © 2026 GourmetOn. Todos os direitos reservados.
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
