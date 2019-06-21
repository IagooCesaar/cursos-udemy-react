import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import todoListItem from './TodoListItem';

import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

import { toggleTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo}) => {
    return (
        <View>
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id}
                    onPressTodo={() =>  dispatchToggleTodo(todo.id)}
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
    { dispatchToggleTodo: toggleTodo }
)(TodoList);