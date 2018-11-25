import { combineReducers } from "redux";

import reducerUsuario from "./reducerUsuario";

const rootReducers = combineReducers({
    usuario: reducerUsuario
});


export default rootReducers;