import {SET_TODO_TEXT, ADD_TODO} from '../action';

const INITIAL_STATE = {
    id: null,
    text: '',
    done: false
};

const editingTodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TODO_TEXT:
            console.log('editingTodoReducer SET_TODO_TEXT:',action.text);
            return {...state, text: action.text}
        case ADD_TODO:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default editingTodoReducer;