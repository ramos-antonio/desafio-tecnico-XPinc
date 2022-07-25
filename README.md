# Boas-vindas ao repositório Desafio Técnico Trybe/XP Inc!

Aqui vocês encontrarão os detalhes de como foram tomadas as principais decisões que nortearam a construção e solução deste desafio, além de encontrar orientações de como compilar e executar o projeto, a partir deste repositório.

# Sobre o projeto
## O que foi desenvolvido

Uma API RESTful utilizando a arquitetura MSC (model-service-controller)!
</br>

A API construída é um sistema de Corretora de Investimentos com listagem de Ações, Compra e Venda de Ações, além de demonstrar saldo em carteira, com possibilidades para saques e depósitos. Tudo isso utilizando o banco de dados MySQL para a gestão de dados.

## Tecnologias

<div align="center">

  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens">
</div>

    * [NodeJS] (https://nodejs.org/)
    * [ExpressJS] (https://expressjs.com/)
    * [Insomnia] (https://insomnia.rest/)
    * [MySQL] (https://www.mysql.com/)
    * [Prisma] (https://www.prisma.io/)
    * [Json Web Tokens] (https://jwt.io/)

## Tomada de decisão

A tomada de decisão foi baseada na análise do problema proposto e no desenvolvimento de uma API seguindo os padrões RESTful.
O primeiro passo, foi modelar o banco de dados. Para isso, foi utilizado o framework [Prisma](https://www.prisma.io/), que é um ORM que mapeia e cria banco de dados, para criar as entidades e seus respectivos relacionamentos.
Para a construção da API foi utilizado o framework [ExpressJS](https://expressjs.com/).
Para o banco de dados utilizei o [MySQL](https://www.mysql.com/).

# Orientações

## Instalando Projeto Localmente

### Para instalar o app, siga estas etapas:

**Clone o repositório**

```
  git clone https://github.com/ramos-antonio/desafio-tecnico-XPinc.git
```

### Depois execute os seguintes comandos:

**Caso yarn**
```
  yarn
```
```
  yarn start
```

**Caso Npm**
```
  npm install
```

```
  npm start
```

⚠ Atenção ⚠ Certifique-se de que o MySQL esteja rodando.
