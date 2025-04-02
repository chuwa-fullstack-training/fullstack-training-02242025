import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    checkedItems: new Set()
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({id: action.payload.id, value: action.payload.value});
        },
        checkAll: (state) =>{
            state.checkedItems = new Set(state.items.map((item)=>item.id));
        },
        uncheckAll: (state) => {
            state.checkedItems = new Set();
        },
        checkItem: (state, action) => {
            state.checkedItems = new Set([...state.checkedItems, action.payload.id]);
        },
        uncheckItem: (state, action) => {
            const newSet = new Set(state.checkedItems);
            newSet.delete(action.payload.id);
            state.checkedItems = newSet;
        },
        clearChecked: (state) => {
            state.items = state.items.filter(item => !state.checkedItems.has(item.id))
        }
    }
})

export const {
    addTodo,
    checkAll,
    uncheckAll,
    checkItem,
    uncheckItem,
    clearChecked
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;