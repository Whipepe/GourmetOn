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
            <div key={prato.id} className="bg-white rounded-xl overflow-hidden shadow">
              <img src={prato.image} alt={prato.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="font-bold text-lg">{prato.title}</h5>
                <button className="mt-4 w-full py-2 rounded-lg bg-red-900 text-white text-center font-semibold hover:bg-red-800">Ver detalhes</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Funcionalidades
