import React from 'react';
import { View, StyleSheet, TextInput, Button, ActivityIndicator, Text, Alert } from 'react-native';
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

        const loginUserSuccess = user => {
            console.log('Sucesso!');
            this.setState({message: "Sucesso!"})
            this.props.navigation.navigate('Main');
        }        
        const loginUserFailed = error => {
            this.setState({
                message: this.getMessageByErrorCode(error.code)         
            })
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(mail,password)
            .then(loginUserSuccess)
            .catch(error => {
                this.setState({message: this.getMessageByErrorCode(error.code)});     
                if (error.code === 'auth/user-not-found') {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Não foi possível encontrar um usuário válido com as credenciais fornecidas. Deseja se cadastrar?',
                        [{
                            text: 'Não',
                            onPress: () => {console.log('Usuário não quer criar conta')},
                            style: 'cancel' /* apenas no iOS */
                        },{
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed)
                            }
                        }],
                        { cancelable: false}
                    )
                } else {
                    loginUserFailed
                }
                console.log('Usuário não encontrado!', error)
            })
            .then(() => this.setState({isLoading:false})) 
            /* similar a  try { } catch(e) { } finally { } */
    }
    getMessageByErrorCode(ErrorCode){
        switch(ErrorCode){
            case 'auth/invalid-email':  
                return 'E-mail inválido';
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found': 
                return 'Usuário não encontrado';
            case 'auth/user-disable': 
                return 'Usuário inativado';
            default: 
                return 'Erro desconhecido: ' + ErrorCode;
        }
    }
    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;
        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
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