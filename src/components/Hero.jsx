import React from 'react'

const Hero = () => {
  return (
    <div id="hero"className="py-16 flex items-center h-screen bg-gray-200 flex-col">
        <h2 className="py-8 text-2xl font-bold text-black">Bem-vindo à GourmetOn!</h2>  

        <img src="public\images\pratos_hero.png" alt="Imagem de comida" className="w-full max-w-5xl h-auto max-h-3/5 rounded-lg shadow-lg mb-8 opacity-80" />

        <p className="text-lg text-gray-700 mb-8 text-justify max-w-5xl">
            Descubra o sabor da excelência culinária com a GourmetOn! Nossa plataforma conecta você a chefs talentosos, oferecendo receitas exclusivas, aulas de culinária online e uma experiência gastronômica única. Explore novos sabores, aprenda técnicas avançadas e faça parte de uma comunidade apaixonada por gastronomia. Junte-se a nós e transforme sua paixão pela cozinha em uma jornada deliciosa!
        </p>

        <button className="h-16 w-64 bg-red-900 text-2xl font-bold text-white px-4 py-2 rounded-2xl hover:bg-red-800 transition-colors duration-300">
        Baixe já nosso App!
      </button>
    </div>
  )
}

export default Hero
