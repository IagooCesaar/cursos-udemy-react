import firebase from 'firebase';
import { Alert } from 'react-native'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
});



export const tryLogin = ({email, password}) => (dispatch) =>  {    
    //retornando a promisse
    return firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(user => {
            //Sucesso!
            //Este component não está conectado à store, então estamos forçando um dispatch graças ao redux-thunk
            const action = userLoginSuccess(user);
            dispatch(action);
            return user;
        })
        .catch(error => {
              
            if (error.code === 'auth/user-not-found') {
                return new Promise((resolve, reject) => {                
                    Alert.alert(
                        'Usuário não encontrado',
                        'Não foi possível encontrar um usuário válido com as credenciais fornecidas. Deseja se cadastrar?',
                        [{
                            text: 'Não',
                            onPress: () => resolve(),
                            style: 'cancel' /* apenas no iOS */
                        },{
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(user => resolve(user))
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false}
                    )
                })
            } else {
                return Promise.reject(error)
            }
            console.log('Usuário não encontrado!', error)
        })
        /* similar a  try { } catch(e) { } finally { } */
}