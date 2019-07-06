import React from 'react';
import {
    View, StyleSheet, TextInput, Button, 
    ActivityIndicator, Text, TouchableOpacity ,
    Image
} from 'react-native';
import firebase from 'firebase';

import CoresSicoob from '../util/CoresSicoob.json';

import { tryLogin } from '../actions';
import { connect } from 'react-redux';

import FormRow from '../components/FormRow';

class LoginPage extends React.Component {
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
    tryLogin() {
        this.setState ({isLoading: true, message: ''});
        const { mail: email, password } = this.state;

        this.props.tryLogin({
            email, password
        })
        .then((user) => {
            //Sucesso!, este then será executado após retorno da promisse do firebase
            if (user) 
                return this.props.navigation.replace('Main');//Apaga o histórico de navegação, removendo a setinha para voltar
            //este return é necessário pois tentará fazer setState em página não visível mais
            // se não tiver usuário apenas limpa a tela
            this.setState({isLoading: false, message: ''});            
        })
        .catch(error => {
            this.setState ({
                isLoading: false, 
                message: this.getMessageByErrorCode(error.code)
            });
        })

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
            <View syle={styles.buttonLoginContainer}> 
                    <TouchableOpacity 
                    onPress={() => this.tryLogin()}
                    style={styles.buttonLogin}    
                >         
                    {/* <Image 
                        source={require('../images/png/24/sign-right.png')} 
                        style={styles.buttonLoginItens}
                    /> */}
                    <Text style={styles.buttonLoginItens} >
                        Entrar
                    </Text>
                </TouchableOpacity>
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
                        keyboardType='email-address'
                        autoCapitalize='none'
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
    },
    buttonLoginContainer: {  
        display: 'flex',        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    buttonLogin: {        
        width: '100%',
        backgroundColor: CoresSicoob.terciarias.cor4,
        alignSelf: 'center',
        borderRadius: 5,     
        lineHeight: 40,
        height: 40,
    },
    buttonLoginImage:{
        flex: 2,
    },
    buttonLoginItens:{
        flex: 6,
        height: 35, 
        fontSize: 22,
        fontWeight: 'bold',
        color: "rgb(255,255,255)",
    }
})

export default connect(null, {
    tryLogin
})(LoginPage);