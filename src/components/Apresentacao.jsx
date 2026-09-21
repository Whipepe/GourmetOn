import React from 'react'

const Apresentacao = () => {
  return (
    <div id="apresentacao" className="py-16 flex items-center min-h-screen bg-gray-200 flex-col">
      <h2 className="py-8 text-2xl font-bold text-black">Apresentação</h2>
        <h3 className="text-2xl mb-12">O que é a GourmetOn?</h3>
        <p className="text-lg text-center max-w-2xl">
          A GourmetOn é uma plataforma inovadora que conecta amantes da gastronomia a chefs talentosos, oferecendo uma experiência culinária única. Com uma interface intuitiva e recursos avançados, os usuários podem explorar receitas exclusivas, agendar aulas de culinária online e descobrir novos sabores. Nossa missão é democratizar o acesso à alta gastronomia, permitindo que qualquer pessoa, em qualquer lugar, possa aprender e apreciar a arte da cozinha.
        </p>
        <p className="text-lg text-center max-w-2xl mt-4">
          Além disso, a GourmetOn promove a interação entre chefs e entusiastas da culinária, criando uma comunidade vibrante onde ideias e técnicas são compartilhadas. Com avaliações e feedbacks, os usuários podem escolher os melhores chefs para suas necessidades, garantindo uma experiência personalizada e de alta qualidade. Junte-se a nós e descubra um mundo de sabores e conhecimentos gastronômicos!
        </p>
    </div>
  )
}

export default Apresentacao
