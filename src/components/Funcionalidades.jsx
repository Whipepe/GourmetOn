import { useState, useEffect } from 'react'

const Funcionalidades = () => {

  // ----- Estados do componente -----

  // Armazena o texto digitado pelo usuário no campo de busca
  const [busca, setBusca] = useState('');

  // Armazena os pratos encontrados pela API
  const [pratos, setPratos] = useState([]);

  // Controla a mensagem de carregamento da busca
  const [loading, setLoading] = useState(true);

  // Armazena os detalhes do prato selecionado
  const [pratoSelecionado, setPratoSelecionado] = useState(null);

  // Controla o carregamento dos detalhes do prato
  const [loadingDetalhes, setLoadingDetalhes] = useState(false);


  // Chave utilizada para acessar a API do Spoonacular
  const API_KEY = '7aa644812a2f4d48996c5782a66fa91e';


  // ----- Função de busca dos pratos -----

  const buscarPratos = async () => {

    // Verifica se o campo de busca está vazio
    if (!busca.trim()) {
      console.log("Busca Vazia!");
      return;
    }

    // Ativa o indicador de carregamento
    setLoading(true);

    try {

      // Monta os parâmetros que serão enviados para a API
      const params = new URLSearchParams({
        query: busca,
        number: "6",
        apiKey: API_KEY
      });

      // Faz a requisição para buscar os pratos
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${params}`
      );

      // Verifica se a requisição retornou algum erro
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      // Exibe informações da requisição no console
      console.log("Status: ", response.status);

      // Converte a resposta da API para JSON
      const data = await response.json();

      console.log("Resposta da API:", data);
      console.log("Dados Recebidos: ", data);
      console.log("Quantidade de pratos: ", data.results.length);
      console.log("Pratos: ", data.results);

      // Salva os pratos encontrados no estado
      setPratos(data.results);

    } catch (error) {

      // Exibe o erro no console caso a requisição falhe
      console.error('Erro ao buscar pratos:', error);

      // Limpa os pratos exibidos
      setPratos([]);

    } finally {

      // Desativa o indicador de carregamento
      setLoading(false);
    }
  }


  // ----- Função para buscar os detalhes de um prato -----

  const buscarDetalhes = async (id) => {

    // Ativa o indicador de carregamento dos detalhes
    setLoadingDetalhes(true);

    try {

      // Busca informações completas do prato na API
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
      );

      // Verifica se houve algum erro na requisição
      if (!response.ok) {
        throw new Error("Erro ao buscar detalhes do prato.");
      }

      // Converte a resposta para JSON
      const data = await response.json();

      // Salva os detalhes do prato selecionado
      setPratoSelecionado(data);

    } catch (error) {

      // Exibe o erro no console
      console.error("Erro ao buscar detalhes: ", error);

    } finally {

      // Desativa o indicador de carregamento
      setLoadingDetalhes(false);
    }
  }


  return (
    <div
      id="funcionalidades"
      className="py-16 flex items-center min-h-screen bg-gray-200 flex-col"
    >

      {/* Título da seção */}
      <h2 className="pb-4 text-3xl font-bold">
        Funcionalidades
      </h2>

      {/* Subtítulo da seção */}
      <h3 className="text-2xl mb-12">
        Experimente nossa demonstração!
      </h3>


      {/* Container principal da funcionalidade */}
      <div className="w-full max-w-5xl px-6">

        {/* Título da busca */}
        <h4 className="text-2xl font-semibold mb-4">
          🔎Encontre seu próximo prato!
        </h4>

        {/* Descrição da funcionalidade */}
        <p className="mb-6 text-gray-600">
          Descubra uma variedade de pratos deliciosos com base em seus ingredientes favoritos!
        </p>


        {/* Input para pegar o ingrediente desejado e enviar para função de busca da API */}
        <div className="flex gap-3 mb-6">

          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}

            onKeyDown={(e) => {

              // Chamar função de busca caso usuário aperte Enter
              if (e.key === 'Enter') {
                buscarPratos();
              }
            }}

            placeholder="Digite um ingrediente... (pizza, frango, chocolate...)"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
          />


          {/* Botão que chama a função de busca quando clicado */}
          <button
            onClick={buscarPratos}
            className="px-6 py-3 rounded-lg bg-red-900 text-white font-semibold hover:bg-red-800"
          >
            Buscar
          </button>

        </div>


        {/* Feedback de que o programa está buscando os dados */}
        {loading && (
          <p className="text-center">
            Buscando pratos...
          </p>
        )}


        {/* Grid com imagens e nomes dos pratos encontrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {pratos.map((prato) => (

            // Card individual de cada prato encontrado
            <div
              key={prato.id}
              className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow"
            >

              {/* Imagem do prato */}
              <img
                src={prato.image}
                alt={prato.title}
                className="w-full h-48 object-cover"
              />


              {/* Informações e botão do prato */}
              <div className="flex flex-col grow p-4">

                {/* Nome do prato */}
                <h5 className="font-bold text-lg mb-4">
                  {prato.title}
                </h5>


                {/* Botão que chama a função de ver detalhes do prato */}
                <button
                  onClick={() => buscarDetalhes(prato.id)}
                  className="mt-auto w-full py-2 rounded-lg bg-red-900 text-white text-center font-semibold hover:bg-red-800"
                >
                  Ver detalhes
                </button>

              </div>

            </div>
          ))}

        </div>


        {/* Modal exibido quando um prato é selecionado */}
        {pratoSelecionado && (

          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"

            // Fecha o modal ao clicar fora do conteúdo
            onClick={() => setPratoSelecionado(null)}
          >

            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"

              // Impede que o clique dentro do modal feche o modal
              onClick={(e) => e.stopPropagation()}
            >

              {/* Verifica se os detalhes ainda estão carregando */}
              {loadingDetalhes ? (

                <div className="p-10 text-center">

                  <p className="text-lg font-semibold">
                    Carregando detalhes...
                  </p>

                </div>

              ) : (

                <>
                  {/* ----- Cabeçalho do modal ----- */}

                  <div className="relative">

                    {/* Imagem do prato */}
                    <img
                      src={pratoSelecionado.image}
                      alt={pratoSelecionado.title}
                      className="w-full h-64 object-cover"
                    />


                    {/* Botão para fechar o modal */}
                    <button
                      onClick={() => setPratoSelecionado(null)}
                      className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full text-xl"
                    >
                      ×
                    </button>

                  </div>


                  {/* ----- Conteúdo do modal ----- */}

                  <div className="p-6">

                    {/* Nome do prato */}
                    <h3 className="text-3xl font-bold mb-6">
                      {pratoSelecionado.title}
                    </h3>


                    {/* ----- Ingredientes ----- */}

                    <div className="mb-8">

                      <h4 className="text-xl font-bold mb-4">
                        🥕 Ingredientes
                      </h4>


                      {/* Lista de ingredientes */}
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


                    {/* ----- Informações nutricionais ----- */}

                    <div>

                      <h4 className="text-xl font-bold mb-4">
                        📊 Informações nutricionais
                      </h4>


                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                        {pratoSelecionado.nutrition?.nutrients

                          // Seleciona apenas os nutrientes que serão exibidos
                          ?.filter((nutriente) =>
                            [
                              "Calories",
                              "Protein",
                              "Carbohydrates",
                              "Fat"
                            ].includes(nutriente.name)
                          )

                          // Cria um card para cada nutriente
                          .map((nutriente) => (

                            <div
                              key={nutriente.name}
                              className="bg-gray-100 rounded-lg p-4 text-center"
                            >

                              {/* Nome do nutriente */}
                              <p className="text-sm text-gray-500">
                                {nutriente.name}
                              </p>


                              {/* Quantidade do nutriente */}
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
