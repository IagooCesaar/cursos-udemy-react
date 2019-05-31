import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "-" }) => {
    return (
        <View style={styles.line}>                    
            <Text style={[
                styles.cell, 
                styles.cellLabel,
                label.length > 8 ? styles.longLabel : null /* trantando o tamanho do texto para deixar fonte menor */ 
            ]}>{label}</Text>
            <Text style={[styles.cell, styles.cellContent]}>{content}</Text>
        </View> 
    );
};
const styles = StyleSheet.create({
    line:{
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: 'rgb(197, 197, 197)',

    },
    cell: {
        fontSize: 18,
        // borderWidth: 1,
        paddingLeft: 5,
    },
    cellLabel:{
        flex: 1,
        fontWeight: 'bold',
    },
    cellContent: {
        flex: 3,
    },
    longLabel:{
        fontSize: 12,
    }
});

export default Line;