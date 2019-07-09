import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';

import series from '../../series.json';

export default class SeriesPage extends React.Component {
    render(){
        return(
            <View>
                <FlatList 
                    data={series}
                    renderItem={({item}) => (
                        <SerieCard serie={item}></SerieCard>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                >                
                </FlatList>
            </View>
        )
    }
};