import React from 'react';
import { View, StyleSheet, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: false,
        }
    }
    onChangeHandler(field, value){
        // const newState = {};
        // newState[field] = value;
        // this.setState(newState); o código abaixo é equivalente::
        this.setState({
            [field]: value
        });
    }
    tryLogin(){
        const { mail, password} = this.state;
        this.setState({isLoading:true});
        firebase
            .auth()
            .signInWithEmailAndPassword(mail,password)
            .then(user => {
                console.log('Usuário autenticado!', user)
            })
            .catch(error => {
                console.log('Usuário não encontrado!', error)
            })
            .then(() => this.setState({isLoading:false})) 
            /*
                similar a 
                try {

                } catch(e) {

                } finally {

                }
            */
    }
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyDsDOtKfkzui716BYDJlr0GmEKTc93fTXU",
            authDomain: "seriesreact-b79bb.firebaseapp.com",
            databaseURL: "https://seriesreact-b79bb.firebaseio.com",
            projectId: "seriesreact-b79bb",
            storageBucket: "seriesreact-b79bb.appspot.com",
            messagingSenderId: "876276615250",
            appId: "1:876276615250:web:c48c6706586a7527"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        
    }
    renderButton(){
        if (this.state.isLoading)
            return <ActivityIndicator />
        return(
            <Button 
                title="Entrar"
                onPress={() => this.tryLogin()}
                />
        )
    }
    renderMessage(){
        const { message } = this.state;
        if (!message) return null;
        return(
            <View>
                <Text></Text>
            </View>
        )
    }
    render(){
        const {mail, password} = this.state;
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput                         
                        style={styles.input}
                        placeholder="usuario@dominio.com" 
                        value={mail}
                        onChangeText={value => this.onChangeHandler('mail',value)}
                    />   
                </FormRow>
                <FormRow last> 
                    <TextInput 
                        style={styles.input}
                        placeholder="******" 
                        value={password}
                        onChangeText={value => this.onChangeHandler('password',value)}
                        secureTextEntry={true}
                    />   
                </FormRow>  
                {this.renderButton()}  
                {this.renderMessage()}            
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 10,
        paddingRight: 10,
    },
    input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})