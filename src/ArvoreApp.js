import React from "react";
// import devtoolsEnhancer from "remote-redux-devtools";
import { composeWithDevTools } from "remote-redux-devtools";

/* ROUTER É UM COMPONENTE ONDE FICARAO AS REFERENCIAS DE TODAS AS PAGINAS DA APLICAÇÃO */
import Router from "./Router";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "./reducers";

/* PASSAREMOS UMA REDUCER PARA A createStore(REDUCER)
- ESTE OUTRO PARAMETRO "devtoolsEnhancer()" é uma Middleware - do Redux devTools - a extensão do chrome
- Mas temos um problema, precisamos passar outra Middleware do reduxThunk, mas o createStore aceita apenas 2 parametros
  - PARA ISSO UTILIZAREMOS A TECNICA DE COMPOSE QUE É JUNTAR AS MIDDLEWARES
  - PORTANTO TIRAREMOS A IMPORTAÇÃO "import devtoolsEnhancer from "remote-redux-devtools";"
  - E IMPORTAREMOS O
    - import { composeWithDevTools } from "remote-redux";
    - const store = createStore(rootReducer, devtoolsEnhancer());
  - AGORA PODEMOS USAR O "composeWithDevTools(applyMiddleware(middleware1, middleware2, middleware3)"
    - COLOCAREMOS APENAS O "reduxThunk" NO LUGAR DOS DIVERSOS MIDDLEWARES
      - composeWithDevTools(applyMiddleware(reduxThunk)
  - AGORA POSSO DESPACHAR ACTIONS QUE RETORNAM FUNÇÕES
    QUE SÃO OS "dispatch"
*/
// const store = createStore(rootReducer, devtoolsEnhancer());
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

/* TODO COMPONENTE QUE PRECISA TER ACESSO A ALGO DO REDUX, PRECISA ESTAR DENTRO DO PROVIDER - QUE PROVISIONARÁ A STORE */
const ArvoreApp = prop => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default ArvoreApp;