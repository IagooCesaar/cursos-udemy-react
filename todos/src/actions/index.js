/*
Em projetos maiores, o arquivo Index é utilizado para realizar o "De-Para"
de actions de outros arquivos para facilitar sua utilização. Neste projeto, estas 
actions serão criadas diretamente neste arquivo
*/

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
    type: ADD_TODO,
    text
})

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    todoId
})

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = (text) => ({
    type: SET_TODO_TEXT,
    text
})

export const SET_EDITING_TODO = 'SET_EDITING_TODO';
export const setEditingTodo = (todo) => ({
    type: SET_EDITING_TODO,
    todo
})

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    todo
})




// Técnica named export