# 🍽️ GourmetOn

O **GourmetOn** é uma aplicação web voltada para o universo da gastronomia, desenvolvida com o objetivo de proporcionar uma experiência simples e intuitiva para usuários que desejam descobrir novos pratos e obter informações sobre receitas.

O projeto apresenta uma interface responsiva e conta com uma integração com a **Spoonacular API**, permitindo realizar buscas por pratos e visualizar informações detalhadas sobre as receitas encontradas.

## 🌐 Demonstração

A aplicação está disponível em:

https://gourmet-32uah085i-whipepe.vercel.app/

---

## ✨ Funcionalidades

* 🔎 **Busca de pratos**

  * Permite pesquisar receitas por ingredientes ou termos relacionados a pratos.
  * A pesquisa pode ser realizada pelo botão **Buscar** ou pressionando `Enter`.

* 🍽️ **Exibição de receitas**

  * Os resultados são apresentados em cards responsivos.
  * Cada card apresenta a imagem e o nome do prato.

* 📖 **Detalhes da receita**

  * Ao selecionar um prato, é possível visualizar:

    * Imagem da receita;
    * Nome do prato;
    * Lista de ingredientes;
    * Informações nutricionais.

* 📊 **Informações nutricionais**

  * São apresentadas informações como:

    * Calorias;
    * Proteínas;
    * Carboidratos;
    * Gorduras.

* 📱 **Layout responsivo**

  * A interface se adapta a diferentes tamanhos de tela, incluindo computadores, tablets e celulares.

* 💬 **Depoimentos**

  * Seção destinada à apresentação de opiniões e experiências de usuários.

---

## 🛠️ Tecnologias utilizadas

### Front-end

* **React.js** — desenvolvimento da interface e componentes.
* **JavaScript** — lógica e interação da aplicação.
* **Tailwind CSS** — estilização e criação do layout responsivo.
* **Vite** — ferramenta utilizada para desenvolvimento e build do projeto.

### API

* **Spoonacular API** — utilizada para obter informações sobre receitas, ingredientes e dados nutricionais.

### Hospedagem

* **Vercel** — utilizada para publicação e hospedagem da aplicação.

---

## 📁 Estrutura do projeto

Uma estrutura simplificada do projeto é:

```text
GourmetOn/
├── public/
│   └── images/
│       └── ...
├── src/
│   ├── components/
│   │   ├── Funcionalidades.jsx
│   │   ├── Depoimentos.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Como instalar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd GourmetOn
```

### 2. Instale as dependências

Com o Node.js instalado, execute:

```bash
npm install
```

### 3. Configure a API

O projeto utiliza a Spoonacular API para realizar as buscas de receitas.

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SPOONACULAR_API_KEY=sua_chave_aqui
```

No código, a chave deve ser acessada através do Vite:

```javascript
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
```

> **Importante:** não coloque a chave da API diretamente no código-fonte nem publique o arquivo `.env` no GitHub.

O arquivo `.env` deve estar incluído no `.gitignore`.

### 4. Execute o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173/
```

---

## 🔑 Autenticação

O projeto **não possui sistema de autenticação de usuários**.

Portanto, não são necessários usuários ou senhas para utilizar a aplicação.

A única credencial necessária para determinadas funcionalidades é a chave da **Spoonacular API**, configurada através da variável de ambiente.

---

## 🍳 Integração com a Spoonacular API

A funcionalidade de pesquisa utiliza o endpoint de busca de receitas da Spoonacular.

O fluxo funciona da seguinte maneira:

```text
Usuário digita uma busca
        ↓
React captura o termo
        ↓
Aplicação envia uma requisição para a Spoonacular API
        ↓
API retorna as receitas
        ↓
React armazena os resultados
        ↓
Receitas são exibidas nos cards
```

Quando o usuário seleciona uma receita, uma segunda requisição é realizada para obter informações mais completas sobre o prato, incluindo ingredientes e informações nutricionais.

---

## 📱 Responsividade

O projeto utiliza as classes responsivas do Tailwind CSS para adaptar a interface a diferentes dispositivos.

Por exemplo:

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
```

A configuração faz com que:

* **Celulares:** 1 coluna;
* **Telas pequenas/tablets:** 2 colunas;
* **Telas maiores:** 3 colunas.

Esse mesmo princípio é utilizado em diferentes partes da aplicação para manter a interface adaptável.

---

## 🤖 Utilização de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Seu uso ocorreu principalmente para:

* Esclarecimento de conceitos relacionados a React, JavaScript e Tailwind CSS;
* Auxílio na integração com a Spoonacular API;
* Explicação do funcionamento de requisições `fetch`, estados e renderização condicional;
* Apoio na elaboração e organização da documentação do projeto.

A implementação, testes, decisões de desenvolvimento e integração dos recursos foram realizadas pela equipe.

---

## 📦 Principais dependências

As principais tecnologias e dependências utilizadas podem ser encontradas no arquivo `package.json`.

Para instalar todas elas automaticamente:

```bash
npm install
```

---

## 👥 Equipe

**Felipe Rabelo**
Desenvolvimento Front-end

**Gustavo Tavares**
Design de UI/UX

**Ricardo Salmerón**
Gerenciamento de Projeto

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
