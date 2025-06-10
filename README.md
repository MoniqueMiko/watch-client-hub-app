Watch Client Hub App
Este projeto é um aplicativo web frontend desenvolvido com Vue.js. Ele funciona como o portal de apresentação online para um salão de beleza, oferecendo uma breve introdução, seção de avaliações de clientes, integração com o Instagram, informações de contato e detalhes sobre os serviços da cabeleireira. O aplicativo se comunica com APIs backend para gerenciar e exibir esses conteúdos.

📦 Tecnologias Principais
Vue.js v3: Estrutura progressiva para construção de interfaces de usuário.
Vite: Ferramenta de build rápida e servidor de desenvolvimento otimizado.
Pinia: Gerenciamento de estado intuitivo para Vue.js.
Vue Router: Roteamento robusto para navegação na aplicação.
Axios: Cliente HTTP baseado em Promises para fazer requisições.
Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.
TypeScript: Superconjunto do JavaScript com tipagem estática.
Lucide Vue Next: Biblioteca de ícones simples e consistentes para Vue.
date-fns: Ferramenta para manipulação e formatação de datas.
🚀 Scripts Disponíveis
Para gerenciar o projeto, você pode usar os seguintes comandos:

Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento.
npm run build	Compila o projeto para produção.
npm run preview	Serve a versão de produção localmente para pré-visualização.
npm run type-check	Verifica erros de tipo do TypeScript.
npm run lint:oxlint	Executa o oxlint para análise de código e correção automática.
npm run lint:eslint	Executa o ESLint para análise de código e correção automática.
npm run lint	Executa as duas ferramentas de análise de código (oxlint e eslint).
npm run format	Formata os arquivos no diretório src/ usando Prettier.

Exportar para as Planilhas
⚙️ Instalação e Uso
Pré-requisitos
Node.js 22+
npm ou yarn instalados.
Passos para Rodar o Projeto
Clone o repositório:
Bash

git clone [[URL_DO_SEU_REPOSITORIO](https://github.com/MoniqueMiko/watch-api-gateway)]
cd watch-client-hub-app
Instale as dependências:
Bash

npm install
Inicie o servidor de desenvolvimento:
Bash

npm run dev
O aplicativo estará disponível em http://localhost:5173/.
🛠️ Build para Produção
Para compilar o aplicativo para implantação em um ambiente de produção:

Bash

npm run build
Os arquivos estáticos otimizados serão gerados na pasta dist/.

🧹 Análise de Código e Formatação
Para manter a qualidade e padronização do código:

Verificar e corrigir problemas de linting:
Bash

npm run lint
Formatar arquivos:
Bash

npm run format
🧑‍💻 Autor
Monique Lourenço -> monique_lourenzia@hotmail.com

📄 Licença
Este projeto é UNLICENSED.