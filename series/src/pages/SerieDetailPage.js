import React from 'react';
import { View, Text } from 'react-native';

export default class SerieDetailPage extends React.Component {
    render(){
        
        return (
            <View>
                <Text>{this.props.navigation.state.params.serie.title}</Text>
            </View>
        );
    }
}