import React from 'react'

const Topbar = () => {

  return (
    <>
        <header className="w-full h-16 fixed top-0 left-0 flex items-center justify-between py-0 px-20 box-border bg-red-900 text-white transition-colors duration-0.3s z-1000">
            <div className="font-bold text-lg">
                Gourmet<span className="text-yellow-400">On</span>
            </div>

            <nav className="flex space-x-4">

                <a href="#home" className="hover:underline hover:font-bold text-white decoration-0 text-md">Home</a>
                <a href="#publico" className="hover:underline hover:font-bold text-white decoration-0 text-md">Público</a>
                <a href="#galeria" className="hover:underline hover:font-bold text-white decoration-0 text-md">Galeria</a>
                <a href="#contato" className="hover:underline hover:font-bold text-white decoration-0 text-md">Contato</a>
                {/* <button className="botao-tema" onClick={toggleDarkMode}>
                    {localStorage.getItem('darkMode') === 'true' ? "☀️" : "🌙"}
                </button> */}
                {/* <button className='' onClick={()=>{setIsOpen(true)}}>Carrinho</button> */}
            </nav>
        </header>
    </>
  )
}

export default Topbar
