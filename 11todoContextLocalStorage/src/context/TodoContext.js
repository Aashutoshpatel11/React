import { useContext, createContext } from 'react'

export const todoContext = createContext({
    todos: [
        {
            id : 1,
            todo : "this is todo",
            completed : false
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete : () => {}
});

export const TodoProvider = todoContext.Provider;

const useTodo = () => {
    return useContext(todoContext);
};

export default useTodo;