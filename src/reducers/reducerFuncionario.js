import { SET_FIELD } from "../actions"

const INITIAL_STATE = {
    name: "",
    email: "",
    city: "",
    state: "",
    phone: "",
    cel: "",
    nat: "",
    competencias: [],
}

/* EX DE COMO UMA ACTION CREATOR DO SET_FIELD É, E VAI FUNCIONAR
{
    type: SET_FIELD,
    field: "title",
    value: "Todo mundo..."
}
*/

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            // action.SET_FIELD
            // action.value

            // PARA RETORNAR O NOVO ESTADO, NAO PODEMOS ALTERAR O ESTADO ATUAL:
            // EX. ERRADO:
            // state[action.field] = action.value

            // A FORMA CORRETA É CLONAR O ESTADO E ENVIAR O CLONE:
            /* const newState = Object.addign({}, state);
            newState[action.field] = action.value */
            // OU UMA FORMA MAI EXUTA
            // ESTOU DIZENDO QUE O MEU newState TEM TDS AS PROPRIEDADES E VALORES DO MEU STATE
            const newState = {...state}
            newState[action.field] = action.value;
            return newState;
            
        default:
            return state
    }
}