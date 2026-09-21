import React from 'react'

const Contato = () => {
  return (
    <div id="contato" className="py-16 flex items-center justify-center min-h-screen bg-gray-200 flex-col">
      <h2 className="pb-4 text-3xl font-bold">Contato</h2>
        <h3 className="text-2xl mb-12">Conheça nossa equipe!</h3>

        <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8">
          <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
            <h3 className="pb-4 text-2xl">Felipe Rabelo</h3>
            <img src="/images/foto-felipe.png" alt="Felipe Rabelo" className="w-32 h-32 rounded-full object-cover" />
            <h4 className="text-xl">Desenvolvedor Front-end</h4>

            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/felipe-rabelo-2199b7291/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-app-icon.png" alt="LinkedIn" className="w-12 h-12" />
              </a>
              <a href="https://github.com/Whipepe" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-app-icon.png" alt="GitHub" className="w-12 h-12" />
              </a>
            </div>

          </div>

          <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
            <h3 className="pb-4 text-2xl">Gustavo Tavares</h3>
            <img src="/images/foto-gustavo.png" alt="Gustavo Tavares " className="w-32 h-32 rounded-full object-cover" />
            <h4 className="text-xl">Documentação</h4>

            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/fgustavot/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-app-icon.png" alt="LinkedIn" className="w-12 h-12" />
              </a>
              <a href="https://github.com/fgustavot" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-app-icon.png" alt="GitHub" className="w-12 h-12" />
              </a>
            </div>
          </div>

          <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
            <h3 className="pb-4 text-2xl">Ricardo Salmerón</h3>
            <img src="/images/foto-ricardo.png" alt="Ricardo Salmerón" className="w-32 h-32 rounded-full object-cover" />
            <h4 className="text-xl">Desenvolvedor Back-end</h4>

            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.linkedin.com/in/ricardo-salmerón-620467297/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-app-icon.png" alt="LinkedIn" className="w-12 h-12" />
              </a>
              <a href="https://github.com/RicardoSalmeron" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-app-icon.png" alt="GitHub" className="w-12 h-12" />
              </a>
            </div>
          </div>

        </section>
    </div>
  )
}

export default Contato
