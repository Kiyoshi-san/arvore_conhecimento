import { combineReducers } from "redux";

import reducerFuncionario from "./reducerFuncionario";

const rootReducers = combineReducers({
    usuario: reducerFuncionario,
    funcionario: reducerFuncionario
});


export default rootReducers;