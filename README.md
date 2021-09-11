
  

<h1  align="center"  id="top">== Lista de Contados Backend ==</h1>

  

  

<p  align="center">

  

<a  href="#sobre">Sobre</a>  &#xa0; | &#xa0;

  

<a  href="#funciona">O que funciona</a>  &#xa0; | &#xa0;

  

<!--<a href="#nao-funciona">O que não funciona</a> &#xa0; | &#xa0;-->

  

<a  href="#pendente">Em Desenvolvimento</a>  &#xa0; | &#xa0;

  

<a  href="#requisitos">Pré requisitos</a>  &#xa0; | &#xa0;

  

<a  href="#observacoes">Observações</a>  &#xa0; | &#xa0;

  

<a  href="#desenvolvedores">Desenvolvedores</a>

  

</p>

  

  

<h2  id="sobre">:notebook: Sobre </h2>

  

  

<p  align="center">:rocket: Esta API foi desenvolvida conforme proposta de desenvolvimento de lista de contatos, através da aplicação de Express, Typescript, Node.js, Postman, MySQL e Knex. </p>

  

  

<h2  id="tecnologias"> 🛠 Tecnologias </h2>

  

  

As seguintes ferramentas foram usadas na construção do projeto:

  

  

* Typescript

  

* Node.js

  

* API

  

* MySQL

  

* Postman

  

* Knex

  

* Express

  
  

  

<h2  id="funciona">:heavy_check_mark: O que funciona</h2>

  

  

* Endpoints

  

-  [x] 1. Criar um contato

POST "https://lista-contatos-back.herokuapp.com/contacts"

![image](https://user-images.githubusercontent.com/82537066/132894169-613d7856-c738-4054-bf76-3192a3185b3a.png)

-  [x] 2. Editar um contato

PUT "https://lista-contatos-back.herokuapp.com/contacts/:id"

![image](https://user-images.githubusercontent.com/82537066/132894219-255d6679-0a2f-4db3-bfe1-610eba1fba98.png)

-  [x] 3. Listar todos os contatos

GET "https://lista-contatos-back.herokuapp.com/contacts"

  

-  [x] 4 . Deletar um contato

DELETE "https://lista-contatos-back.herokuapp.com/contacts/:id"

  

  
  
  
  

<h2  id="nao-funciona">:x: O que não funciona</h2>

  

* Melhores Validações antes de enviar dados para o banco de dados.

  

  
  

  

<h2  id="requisitos">:leftwards_arrow_with_hook: Pré-requisitos</h2>

  

  

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

  

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

  

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

  

  

<h4>:checkered_flag: Rodando o projeto </h4>

  

  

```bash

  

# Clone este repositório

  

$ git clone <https://github.com/VitoriaMochovik/lista-contatos-back.git>

  

# Acesse a pasta do projeto no terminal

  

$ cd ./lista-contatos-back

  

# Instale as dependências

  

$ npm install

  

# Para popular o banco

  

$ npm run migrations

  

# Para iniciar o projeto

  

$ npm run dev

  

# O servidor inciará na porta:3003 - acesse <http://localhost:3003>

  

```

  

  

<h2  id="observacoes">:pencil: Observações</h2>

  

  

- Ícones utilizados para organização de commit's


:package: Inicio


:arrow_up: atualização

:beetle: correção de bug

:art: estilização

  - Banco de dados utilizado é de acesso pessoal

<h2  id="desenvolvedores">:construction_worker: Desenvolvedoras</h2>

  

  
  

<table>

  

  

<tr>

  

  

  

<td  align="center"><a  href="https://github.com/LuisClaudioBoaventura"><img  style="border-radius: 50%"  src="https://avatars.githubusercontent.com/u/79278484?v=4"  width="100px"  alt=""/>

  

  

<br  />

  

  

<sub><b>Luis Boaventura</b></sub></a>  <a  href="https://github.com/tshadz">🚀</a></td>

  

  

<td  align="center"><a  href="https://github.com/VitoriaMochovik"><img  style="border-radius: 50%"  src="https://avatars.githubusercontent.com/u/82537066?v=4"  width="100px"  alt=""/>

  

  

<br  />

  

  

<sub><b>Vitória Mochovik</b></sub></a>  <a  href="https://github.com/VitoriaMochovik">🚀</a></td>

  

  

</tr>

  

  

</table>

  

  

  

  

  

  

<a  href="#top">Voltar para o topo</a>
