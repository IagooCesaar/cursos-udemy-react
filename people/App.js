import {createAppContainer, createStackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import {CapitalizarPrimeiraLetra, capitalizarPrimeiraLetra} from './src/utils'

const AppNavigator = createStackNavigator({
  /* A página principal será a primeira declarada, não tendo relação com a palavra Main */
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {
      const nome = capitalizarPrimeiraLetra(navigation.state.params.people.name.first); 
      /* parametro recebido de pageParams do evento navigateToPeopleDetail em PeoplePage (onItemPress, onPress) */
      //const nome = 'Iago'
      return ({ 
        title: nome,
        headerTitleStyle: {
          color: 'rgb(255, 255, 255)',
          fontSize: 30,
        }
      })      
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Lista de Pessoas',
    headerTintColor: 'rgb(255, 255, 255)',
    headerStyle: {
      backgroundColor: 'rgb(239, 109, 9)',  
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(197, 197, 197)'
    },
    headerTitleStyle: {
      color: 'rgb(255, 255, 255)',
      fontSize: 30,
      flexGrow: 1, //ocupar todo espaço possível do container
      textAlign: 'center',
    }
  }
});

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;