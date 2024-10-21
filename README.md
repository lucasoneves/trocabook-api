## Trocabook API

A documentação a seguir descreve a arquitetura inicial e a configuração da API para troca de livros. A API foi projetada usando Node.js, Express, Sequelize e SQLite, seguindo uma estrutura modular que pode ser reutilizada em outros projetos de APIs RESTful.

### Estrutura do Projeto

O projeto possui a seguinte organização de diretórios:

1. `app.js`: Arquivo principal do servidor onde o Express é configurado. Ele inclui os middlewares, define as rotas e inicializa o servidor.

2. `config/config.json`: Arquivo de configuração do Sequelize, que define os parâmetros do banco de dados. Neste caso, o projeto utiliza o SQLite em ambiente de desenvolvimento.

3. `controllers/`: Pasta que contém os controladores responsáveis por gerenciar as operações de cada recurso, como usuários, livros e propostas de troca.

4. `models/`: Diretório onde estão localizados os modelos do Sequelize e o arquivo `index.js`, que configura a conexão com o banco de dados.

5. `routes/`: Contém as definições das rotas para os diferentes recursos da API, como usuários, livros e propostas.

6. `migrations/`: Armazena os arquivos de migração usados para configurar o banco de dados.

7. `seeders/`: Diretório para os arquivos de seed, que podem ser usados para popular o banco de dados com dados iniciais, se necessário.

### Configuração e Instalação

Para configurar o projeto, é necessário ter o Node.js instalado (versão 12 ou superior), além do npm ou yarn. Os passos para configuração são:

1. Clonar o repositório para a máquina local e acessar o diretório do projeto.

2. Instalar as dependências do projeto executando o comando `npm install`.

3. Configurar o Sequelize. O arquivo `config/config.json` já está preparado para utilizar o SQLite, com o banco de dados sendo criado no arquivo `database.sqlite` na raiz do projeto.

4. Executar as migrações com o comando `npx sequelize-cli db:migrate` para configurar o banco de dados.

5. Iniciar o servidor em modo de desenvolvimento com o comando `npm run dev`. O servidor estará acessível em `http://localhost:3000`.

### Descrição dos Diretórios

- `app.js`: Arquivo principal onde o Express é configurado, incluindo os middlewares e as rotas.
- `config/config.json`: Configura o banco de dados para diferentes ambientes (neste caso, desenvolvimento com SQLite).
- `controllers/`: Contém as funções que manipulam as operações dos dados, como criar, atualizar e excluir registros.
- `models/`: Inclui os arquivos que representam as tabelas do banco de dados, configurados através do Sequelize.
- `routes/`: Define as rotas disponíveis na API.
- `migrations/`: Utilizado para a criação e atualização das tabelas do banco de dados.
- `seeders/`: Para popular o banco de dados com dados iniciais.

### Scripts Disponíveis

Existem scripts pré-definidos para facilitar o uso do projeto:

- `npm start`: Inicia o servidor.
- `npm run dev`: Inicia o servidor com o nodemon, reiniciando automaticamente quando há mudanças no código.
- `npx sequelize-cli db:migrate`: Executa as migrações do banco de dados.

### Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:
- Node.js para o ambiente de execução.
- Express para criar a estrutura básica da API.
- Sequelize como ORM para manipular o banco de dados.
- SQLite como banco de dados leve e fácil de configurar.
- Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento.
