export const SET_FIELD = "SET_FIELD" // ACTION TYPE
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value,
    }
}