import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [] ,
      loading: false,
      error: false
    };
  }
  componentDidMount() { /* Após montar (renderizar) componente App*/
    /* Promises */
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
        const { results } = response.data;         
        this.setState({ 
          peoples: results,
          loading: false,
          error: false,
        });
      })
      .catch(error =>  {
        this.setState({
          loading: false,
          error: true})
      })
    }, 1500)
    
  }
  renderPage(){
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="rgb(239, 109, 9)" />
    } 
    if (this.state.error) {
      return <Text style={styles.error}>Algo deu errado.... =(</Text>
    }
    return (
      <PeopleList 
            peoples={this.state.peoples} 
            onPressItem={(pageParams) => {
                this.props.navigation.navigate('PeopleDetail', pageParams);                
            }}
        />  
    );
  }

  render(){
    // this.props.navigation.navigate( Chave da Página, State)
    // 
    return (
      <View style={styles.container}>     
        {this.renderPage()}
        {/*
          this.state.loading 
            ? <ActivityIndicator size="large" color="rgb(239, 109, 9)" /> 
            : this.state.error
              ? <Text style={styles.error}>Algo deu errado.... =(</Text>
              : <PeopleList 
                    peoples={this.state.peoples} 
                    onPressItem={(pageParams) => {
                        this.props.navigation.navigate('PeopleDetail', pageParams);                
                    }}
                />
        */}               
      </View>
    );
  }
}

/* StyleSheet */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    error:{
      color: 'red',
      alignSelf: 'center'
    }
});