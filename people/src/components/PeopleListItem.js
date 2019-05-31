import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { capitalizarPrimeiraLetra } from '../utils';

const PeopleListItem = props => {
    const {people, navigateToPeopleDetail} = props;
    const {title, first, last} = people.name;
    const {picture} = people;
    return(        
        <TouchableOpacity onPress={() => {
            console.log('Clicou na pessoa',first);
            navigateToPeopleDetail({people});
        }} >
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri:picture.thumbnail} } />
                <Text style={styles.lineText}>
                    {`${
                        capitalizarPrimeiraLetra(title)
                    } ${
                        capitalizarPrimeiraLetra(first)
                    } ${
                        capitalizarPrimeiraLetra(last)
                    }`}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

/* StyleSheet */
const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(197, 197, 197)',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7 /* utilizar 7 partes do container */
    },
    avatar:{
        aspectRatio: 1,
        flex: 1, /* utilizar 8 partes do container */
        marginLeft: 15,
        borderRadius: 60
    }    
});

export default PeopleListItem;