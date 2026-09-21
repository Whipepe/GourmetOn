import React from 'react'

const Hero = () => {
  return (
    <div id="hero"className="py-16 flex items-center h-screen bg-gray-200 flex-col">
        <p className="py-8 text-2xl font-bold text-black">Bem-vindo à GourmetOn!</p>    

        <img src="public\images\pratos_hero.png" alt="Imagem de comida" className="w-full h-auto max-h-3/5 rounded-lg shadow-lg mb-8 opacity-80" />

        <p className="text-lg text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate ut voluptatibus illo quibusdam a itaque enim, dolorem aliquid error optio? Iste expedita eligendi labore pariatur rem minima hic maiores eius nesciunt molestias, temporibus consectetur sint ipsa eos sed nobis laudantium quasi, corporis similique sequi, incidunt aliquam dolores. Dicta, consectetur.
        </p>

        <button className="h-16 w-64 bg-red-900 text-2xl font-bold text-white px-4 py-2 rounded-2xl hover:bg-red-800 transition-colors duration-300">
        Baixe nosso App!
      </button>
    </div>
  )
}

export default Hero
