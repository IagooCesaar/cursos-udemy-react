import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Vibration from 'Vibration';

import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ 
    todos, 
    dispatchToggleTodo, 
    dispatchSetEditingTodo
}) => {
    return (
        <View>
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id}
                    onPressTodo={() =>  dispatchToggleTodo(todo.id)}
                    onLongPressTodo={() => {
                        Vibration.vibrate(300)
                        dispatchSetEditingTodo(todo)
                    }}
                />              
            ))}
        </View>
    )
};

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps, 
    { 
        dispatchToggleTodo: toggleTodo ,
        dispatchSetEditingTodo: setEditingTodo,
    }
)(TodoList);