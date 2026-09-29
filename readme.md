# Projeto Single Page Application (SPA)

## 1. Visão Geral do Projeto
Esta é uma Single Page Application focada no registo e listagem dinâmica de usuários. O projeto foi desenvolvido para demonstrar proficiência em manipulação de DOM e arquitetura modular, utilizando estritamente Vanilla JavaScript (ES6 Modules) sem a dependência de frameworks pesadas.

## 2. Tecnologias Utilizadas e Pré-requisitos
* **Linguagens:** HTML5, CSS3 e JavaScript (ES6+).
* **Dependências Externas:** [SweetAlert2](https://sweetalert2.github.io/) (via CDN) para modais dinâmicos e feedbacks visuais.
* **Pré-requisitos:** Navegador Web moderno (Chrome, Edge, Firefox) e a extensão *Live Server* instalada no VS Code para evitar bloqueios de CORS ao importar módulos locais.

## 3. Instruções de Instalação e Execução
Como se trata de uma aplicação estática nativa, não há necessidade de comandos de build (ex: `npm install` ou `npm run build`).
1. Faça o clone do repositório: `git clone https://github.com/GusttavoSR/projeto-spa.git`
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito no Arquivo `index.html` e selecione **"Open with Live Server"**.

## 4. Arquitetura Modular e Armazenamento
O código está segregado seguindo princípios de responsabilidade única:
* **Roteamento:** Controle dinâmico de telas sem recarregamento da página.
* **Armazenamento:** Persistência de dados locais através da API `localStorage`, utilizando `JSON.stringify()` e `JSON.parse()`.
* **Segurança e Validação:** Sanitização de entradas com `.trim()` e prevenção de duplicação de dados consultando o histórico no array de armazenamento.
