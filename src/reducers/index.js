import { combineReducers } from "redux";

import reducerFuncionario from "./reducerFuncionario";

const rootReducers = combineReducers({
    usuario: reducerFuncionario,
    formFunc: reducerFuncionario
});


export default rootReducers;