# Arquitetura do projeto

Based on 'File Layout' session on https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e

```
.babelrc                --> Configuração do Babel (alias, presets, plugins)
config/
  webpack.dev.config.js   
  webpack.prod.config.js 
package.json              
src/                      
  assets/                 
  components/             --> Componentes to be used throughout project (e.g. App and Root)
  config/                 --> Configuratin for Joi
  consts/                 --> Constants
  containers/             --> Containers to be used throughout project (mainly the App container)
  helpers/                
  hocs/                   --> High Order Components
  modules/                --> Contains all data related functionalities
    <feature>/            --> Groups functionalities by feature
      actionTypes/        --> Groups all actions types related to this feature
      actions/            --> Groups all actions related to this feature
      reducers/           --> Groups all reducers related to this feature
    reducers.js           --> Reducers combiner
  routes/                 
    index.js              --> Contains all routes in the app
    <page>/               --> Groups all files related to a specific page
      index.js            --> Dumb Component for the page
      containers/         --> Groups all smart components required for page
      components/         --> Groups all dumb components required for page
  index.js                --> App entry point
  index.html              --> HTML template
  store.js                --> Redux store config
``` 
