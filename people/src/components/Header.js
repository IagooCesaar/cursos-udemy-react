import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>
            {props.titulo}
        </Text>
    </View>
);

/* StyleSheet */
const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: 'rgb(239, 109, 9)',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        color: 'rgb(255, 255, 255)',    
    }
});

export default Header;