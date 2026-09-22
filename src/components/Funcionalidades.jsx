import {useState, useEffect} from 'react'

const Funcionalidades = () => {

  const [busca, setBusca] = useState('');
  const [pratos, setPratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pratoSelecionado, setPratoSelecionado] = useState(null);
  const [loadingDetalhes, setLoadingDetalhes] = useState(false);

  const API_KEY = '7aa644812a2f4d48996c5782a66fa91e'; 

  const buscarPratos = async() => {
    if (!busca.trim()) {
      console.log("Busca Vazia!");
      return; // Se a busca estiver vazia, não faz nada
    }
    setLoading(true);

    try {
      const params = new URLSearchParams({
        query: busca,
        number: "6",
        apiKey: API_KEY
      });

      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${params}`);

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      console.log("Status: ", response.status);
      const data = await response.json();
      console.log("Resposta da API:", data);

      console.log("Dados Recebidos: ",data);
      console.log("Quantidade de pratos: ",data.results.length);
      console.log("Pratos: ",data.results);

      setPratos(data.results);
    } catch (error) {
      console.error('Erro ao buscar pratos:', error);
      setPratos([]);
    } finally {
      setLoading(false);
    }

  }
  
  const buscarDetalhes = async(id) => {
    setLoadingDetalhes(true);

    try{
      const response = await fetch( `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`);

      if (!response.ok){
        throw new Error("Erro ao buscar detalhes do prato.");
      }

      const data = await response.json();

      setPratoSelecionado(data);

    } catch (error){
      console.error("Erro ao buscar detalhes: ", error)
    } finally {
      setLoadingDetalhes(false);
    }
  }

  return (
    <div id="funcionalidades" className="py-16 flex items-center min-h-screen bg-gray-200 flex-col">
      <h2 className="pb-4 text-3xl font-bold">Funcionalidades</h2>
      <h3 className="text-2xl mb-12">Experimente nossa demonstração!</h3>
      <div className="w-full max-w-5xl px-6">
        <h4 className="text-2xl font-semibold mb-4">🔎Encontre seu próximo prato!</h4>

        <p className="mb-6 text-gray-600">Descubra uma variedade de pratos deliciosos com base em seus ingredientes favoritos!</p>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                buscarPratos();
              }
            }}
            placeholder="Digite um ingrediente... (pizza, frango, chocolate...)"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white" 
          />

          <button onClick = {buscarPratos}
            className="px-6 py-3 rounded-lg bg-red-900 text-white font-semibold hover:bg-red-800">
            Buscar
          </button>
        </div>

        {loading && (
          <p className="text-center">Buscando pratos...</p>
        )}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pratos.map((prato) => (
            <div key={prato.id} className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow">
              <img src={prato.image} alt={prato.title} className="w-full h-48 object-cover" />
              <div className="flex flex-col grow p-4">
                <h5 className="font-bold text-lg mb-4">{prato.title}</h5>
                <button onClick={() => buscarDetalhes(prato.id)} className="mt-auto w-full py-2 rounded-lg bg-red-900 text-white text-center font-semibold hover:bg-red-800">Ver detalhes</button>
              </div>
            </div>
          ))}
        </div>

        {pratoSelecionado && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setPratoSelecionado(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {loadingDetalhes ? (
                <div className="p-10 text-center">
                  <p className="text-lg font-semibold">
                    Carregando detalhes...
                  </p>
                </div>
              ) : (
                <>
                  {/* Cabeçalho */}
                  <div className="relative">
                    <img
                      src={pratoSelecionado.image}
                      alt={pratoSelecionado.title}
                      className="w-full h-64 object-cover"
                    />

                    <button
                      onClick={() => setPratoSelecionado(null)}
                      className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full text-xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="p-6">

                    {/* Nome */}
                    <h3 className="text-3xl font-bold mb-6">
                      {pratoSelecionado.title}
                    </h3>

                    {/* Ingredientes */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">
                        🥕 Ingredientes
                      </h4>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pratoSelecionado.extendedIngredients?.map(
                          (ingrediente) => (
                            <li
                              key={`${ingrediente.id}-${ingrediente.original}`}
                              className="bg-gray-100 rounded-lg px-4 py-2"
                            >
                              {ingrediente.original}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Nutrição */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">
                        📊 Informações nutricionais
                      </h4>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                        {pratoSelecionado.nutrition?.nutrients
                          ?.filter((nutriente) =>
                            ["Calories", "Protein", "Carbohydrates", "Fat"]
                              .includes(nutriente.name)
                          )
                          .map((nutriente) => (
                            <div
                              key={nutriente.name}
                              className="bg-gray-100 rounded-lg p-4 text-center"
                            >
                              <p className="text-sm text-gray-500">
                                {nutriente.name}
                              </p>

                              <p className="text-xl font-bold">
                                {Math.round(nutriente.amount)}
                                {nutriente.unit}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>

                  </div>
                </>
        )}
      </div>
    </div>
)}

      </div>
    </div>
  )
}

export default Funcionalidades
