import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Input from './Input';
import { connect } from 'react-redux';
import {addTodo, setTodoText, updateTodo} from '../actions';

class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    };

    onPress() { 
        const { todo } = this.props;
        if (todo.text !== '' ) {
            if (todo.id) { //Se existe id 
                this.props.dispatchUpdateTodo(todo)
            } else {
                this.props.dispatchAddTodo(todo.text);
            }            
        }            
    };

    render() {
        const { text, id } = this.props.todo;        
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContaier}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonAdd}
                        onPress={() => this.onPress()}                        
                    >
                        <Text style={styles.buttonAddContainer}>{id ? 'UPD' : 'ADD' }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatchAddTodo: (text) => dispatch(addTodo(text))
//     }
// }
const mapDispatchToProps = {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo,
}

const mapStateToProps = (state) => {
    return {
        todo: state.editingTodo
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

const styles = StyleSheet.create ({
    formContainer: {
        flexDirection: 'row',
    },
    inputContaier: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
    },
    buttonAdd: {      
        backgroundColor: "rgb(40, 99, 193)",
        alignItems: 'center',
        paddingTop: 10,
    },
    buttonAddContainer: {
        height: 30, 
        color: "rgb(255, 255, 255)",
        fontWeight: 'bold',
    },
});