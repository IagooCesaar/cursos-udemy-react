import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import Input from './Input';

export default class TodoForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            text: '',
        }
    };

    onChangeText(text) {
        this.setState({
            text
        })
    };

    onPress() {
        console.log(thi.state.text);
    };

    render() {
        const { text } = this.state;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContaier}>
                    <Input 
                        onChangeText={this.onChangeText()}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="ADD" 
                        onPress={this.onPress()}
                    />
                </View>
            </View>
        )
    }
}

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
});