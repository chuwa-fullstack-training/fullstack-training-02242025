import { ADD_TODO, CHECK_ALL, UNCHECK_ALL, CHECK_ITEM, UNCHECK_ITEM, CLEAR_CHECKED} from "./constants"


const initialState = {
    items: [],
    checkedItems: new Set()
}

export const todoReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                items: [...state.items, { id: action.payload.id, value: action.payload.value }]
            }
        case CHECK_ALL:
            return{
                ...state,
                checkedItems: new Set(state.items.map((item) => item.id)),
            }
        case UNCHECK_ALL:
            return{
                ...state,
                checkedItems: new Set(),
            }
        case CHECK_ITEM:
            return{
                ...state,
                checkedItems: new Set([...state.checkedItems, action.payload.id])
            }
        case UNCHECK_ITEM:
            const newSet = new Set(state.checkedItems);
            newSet.delete(action.payload.id)
            return{
                ...state,
                checkedItems: newSet
            }
        case CLEAR_CHECKED:
            return{
                ...state,
                items: state.items.filter((value)=>!state.checkedItems.has(value.id))
            }
        default:
            return state;
    }
}