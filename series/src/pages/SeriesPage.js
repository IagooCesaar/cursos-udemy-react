import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';

import series from '../../series.json';

const SeriesPage = (props) => {    
    return(
        <View>
            <FlatList 
                data={series}
                renderItem={({item, index}) => (
                    <SerieCard 
                        serie={item} 
                        isFirstColumn={index % 2 === 0} 
                        onNavigate={seires => props.navigation.navigate('SerieDetail',{ serie: item })}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                ListHeaderComponent={props => (<View style={styles.marginTop} />)}
                ListFooterComponent={props => (<View style={styles.marginBottom} />)}
            >                
            </FlatList>
        </View>
    )
};

export default SeriesPage;

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 2,
    },
    marginBottom: {
        marginBottom: 2
    },
})