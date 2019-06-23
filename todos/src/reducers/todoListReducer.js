import {ADD_TODO, TOGGLE_TODO} from '../actions'; //index.js já está subtendido

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:             
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            }
            return [...state, newTodo] // spread operator
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.todoId)
                    return Object.assign({}, todo, { done: !todo.done });
                return todo;
                
            })
        default:
            return state
    }
}

export default todoListReducer;