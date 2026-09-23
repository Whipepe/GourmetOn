import React from 'react'

const Depoimentos = () => {
  return (
    <div id="depoimentos" className="flex py-16 flex-col items-center min-h-screen bg-gray-200 text-center"> 
      <h2 className="pb-4 text-3xl font-bold">Depoimentos</h2>
        <h3 className="text-2xl mb-12">O que nossos clientes dizem!</h3>
        <div className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white sm:col-end-2 max-w-7xl">
            <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white">
            <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
                <h3 className="pb-4 text-2xl">João Silva</h3>
                <p className="text-lg text-center max-w-md">
                "A GourmetOn transformou minha experiência na cozinha! As receitas são incríveis e os chefs são super talentosos. Recomendo a todos que amam gastronomia!"
                </p>
            </div>
            </section>
            <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white">
            <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
                <h3 className="pb-4 text-2xl">Maria Oliveira</h3>
                <p className="text-lg text-center max-w-md">
                "A GourmetOn é uma plataforma incrível! Os chefs são profissionais qualificados e as receitas são deliciosas. Uma excelente experiência para todos os amantes da gastronomia!"
                </p>
            </div>
            </section>
            <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white">
            <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
                <h3 className="pb-4 text-2xl">Carlos Pereira</h3>
                <p className="text-lg text-center max-w-md">
                "A GourmetOn é simplesmente fantástica! A variedade de receitas e a qualidade dos chefs são impressionantes. Estou aprendendo muito e me divertindo na cozinha!"
                </p>
            </div>
            </section>
            <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white">
            <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
                <h3 className="pb-4 text-2xl">Ana Costa</h3>
                <p className="text-lg text-center max-w-md">
                "A GourmetOn é uma plataforma incrível para quem ama cozinhar! As receitas são detalhadas e os chefs são muito talentosos. Estou adorando a experiência!"
                </p>
            </div>
            </section>
            <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white">
            <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
                <h3 className="pb-4 text-2xl">Lucas Fernandes</h3>
                <p className="text-lg text-center max-w-md">
                "A GourmetOn é uma plataforma incrível! As receitas são fáceis de seguir e os chefs são muito talentosos. Estou aprendendo muito e me divertindo na cozinha!"
                </p>
            </div>
            </section>
            <section className="flex justify-center items-stretch gap-8 flex-wrap mb-8 text-white">
            <div className="w-sm pt-4 bg-red-900 rounded-lg shadow-md p-4 flex flex-col items-center transition-0.3s hover:scale-105">
                <h3 className="pb-4 text-2xl">Fernanda Lima</h3>
                <p className="text-lg text-center max-w-md">
                "A GourmetOn é uma plataforma incrível para quem ama cozinhar! As receitas são detalhadas e os chefs são muito talentosos. Estou adorando a experiência!"
                </p>
            </div>
            </section>
        </div>
    </div>
  )
}

export default Depoimentos
