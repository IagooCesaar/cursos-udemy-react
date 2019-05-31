import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';

const AppNavigator = createStackNavigator({
  'Login':{
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  },
},
{
  defaultNavigationOptions: {
    title: "Séries",
    headerStyle:{
      headerTintColor: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(000, 073, 080)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(189, 190, 192)',
    },
    headerTitleStyle:{
      color: 'rgb(255, 255, 255)',
      fontSize: 30,      
    }
  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;