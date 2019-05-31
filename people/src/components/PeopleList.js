import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const {peoples, onPressItem} = props;      
    return(
        <FlatList 
            style={styles.container} 
            data= {peoples}
            renderItem={({ item }) => (
                    <PeopleListItem                         
                        people={item}
                        navigateToPeopleDetail={onPressItem} />
            )}
            keyExtractor={(item,index) => index.toString() }
        />
    ) ;        
};

/* StyleSheet */
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242, 173, 152)',
    }
});

export default PeopleList;