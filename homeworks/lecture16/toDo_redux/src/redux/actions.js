import { ADD_TODO, CHECK_ALL, UNCHECK_ALL, CHECK_ITEM, UNCHECK_ITEM, CLEAR_CHECKED} from "./constants"

export const addToDo = (value, id) => ({
    type: ADD_TODO,
    payload: {
        value: value,
        id: id
    }
})

export const checkAll = () => ({
    type: CHECK_ALL,
    payload: {},
})

export const uncheckAll = () => ({
    type: UNCHECK_ALL,
    payload: {}
})

export const checkItem = (id) => ({
    type: CHECK_ITEM,
    payload: {id: id}
})

export const uncheckItem = (id) => ({
    type: UNCHECK_ITEM,
    payload: {id: id}
})

export const clearChecked = () => ({
    type: CLEAR_CHECKED,
    payload: {}
})