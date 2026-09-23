import React from 'react'

const Contato = () => {
  return (
    <div id="contato" className="py-16 flex items-center justify-center min-h-screen bg-gray-200 flex-col">
      <h2 className="pb-4 text-3xl font-bold">Contato</h2>
        <h3 className="text-2xl mb-12">Por favor, deixe um feedback!</h3>

        <div className="flex gap-3 mb-6 sm:w-2xl md:w-4xl w-3-xl">
          <input
            type="text"
            placeholder="Digite seu endereço de email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
          />
          <input
            type="text"
            placeholder="Digite seu feedback!"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
          />

        </div>

        <div className="flex gap-3 mb-6 sm:w-2xl md:w-4xl w-3-xl justify-end">
          <button className="px-6 py-3 rounded-lg bg-red-900 text-white font-semibold hover:bg-red-800">
            Enviar
          </button>
        </div>
    </div>
  )
}

export default Contato
