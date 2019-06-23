import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Input from './Input';
import { connect } from 'react-redux';
import {addTodo, setTodoText} from '../actions';


class TodoForm extends React.Component {
    onChangeText(text) {
        console.log('onChangeText: ',text);
        this.props.dispatchSetTodoText(text);
    };

    onPress() {        
        const { text } = this.props.todo;
        console.log('onPress: ',text);
        if (text !== '' )
            this.props.dispatchAddTodo(text);
    };

    render() {
        const { text } = this.props.todo;
        console.log('render: ',text);
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
                        <Text style={styles.buttonAddContainer}>ADD</Text>
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
    dispatchSetTodoText: setTodoText
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