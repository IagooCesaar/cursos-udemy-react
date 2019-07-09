import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import SeiresPage from './pages/SeriesPage';

import CoresSicoob from './util/CoresSicoob.json';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: SeiresPage,
  }  ,
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
    headerTintColor: 'rgb(255, 255, 255)',
    headerStyle:{
      headerTintColor: 'rgb(255, 255, 255)',
      backgroundColor: CoresSicoob.primarias.cor4,
      borderBottomWidth: 1,
      borderBottomColor: CoresSicoob.cinzas.cor1,
    },
    headerTitleStyle:{
      color: 'rgb(255, 255, 255)',
      fontSize: 30,      
    }
  }

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;