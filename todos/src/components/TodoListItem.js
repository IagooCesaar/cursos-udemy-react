import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => {   
    return (
        <TouchableOpacity 
            onPress={onPressTodo} 
            onLongPress={onLongPressTodo}
        >
            <View style={styles.line}>            
                <Text style={[
                    styles.lineText, 
                    todo.done ? styles.lineThrougth : null
                ] }>
                    { todo.text }
                </Text>
            </View>
        </TouchableOpacity>  
    );
}

/* StyleSheet */
const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(197, 197, 197)',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7 /* utilizar 7 partes do container */
    },   
    lineThrougth: {
        textDecorationLine: 'line-through',
    },
});

export default TodoListItem;