# Arquitetura do projeto

```
.babelrc                --> Configuração do Babel (alias, presets, plugins)
.env                    --> Chaves de acesso da AWS
.s3-website.json        --> Configurações de deploy da AWS
server.js               --> Configuração do server (dependências, schemas, módulos de controladores, endpoints...)
webpack.dev.config.js   --> Configuração do webpack para rodar em development
webpack.prod.config.js  --> Configuração do webpack para rodar em production
package.json            --> Configuração de dependências a serem instaladas pelo npm
style/                  --> Arquivos CSS globais
src/                    --> Arquivos do frontend
  assets/                 --> Assets do projeto
  components/             --> Componentes a seram reaproveitados no projeto (contém o App e o Root)
  config/                 --> Configurações do JOI
  consts/                 --> Page types
  helpers/                --> Arquivos com funções de utilidade geral
  hocs/                   --> High Order Components
  routes/                 --> Arquivo de configuração com todas as rotas
  modules/                --> Contém todos os módulos do projeto
    <feature>/
      actions/              --> Todas as ações a serem chamadas na feature
      actionTypes/          --> Definição das ações
      components/           --> Componentes visuais da feature
      containers/           --> Componentes com lógica (integram as ações e os componentes)
      pages/                --> Componentes que são carregados a partir das rotas
      reducers/             --> Consomem/executam as ações
      schemas/              --> Schemas para formulários
    reducers.js           --> Definição de todos os reducers
    store.js              --> Configurações da store do Redux e Firebase
```
