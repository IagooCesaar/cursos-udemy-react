import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import editingTodoReducer from './todoListReducer';

//export default const rootReducer = combineReducers({ });
const rootReducer = combineReducers({
    /*Passaremos a chave que teremos tratrar e depois o reducer que é responsável por alterar o state daquela chave */
    todos: todoListReducer,
    editingTodo: editingTodoReducer
})

export default rootReducer;