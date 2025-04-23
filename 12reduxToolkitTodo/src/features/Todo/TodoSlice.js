import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{
            id: 1,
            text: "1st todo"
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (each) => ( each.id !== action.payload ) )
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;