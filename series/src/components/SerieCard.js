import React from 'react';
import { 
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity
} from 'react-native';

import CoresSicoob from '../util/CoresSicoob.json';

const SerieCard = ({ serie, isFirstColumn, onNavigate }) => (
    <TouchableOpacity 
        style={styles.container}
        onPress={onNavigate}//() => onNavigate(serie)
    >
        <View style={[
                styles.card,
                isFirstColumn ? styles.firstColumn : styles.lastColumn
            ]}>
            <Image 
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}//evitar que imagem seja distorcida
                resizeMode="cover"
            />
            <View style={styles.cardTitleWrapper}>
                <Text syle={styles.cardTitle}>{serie.title}</Text> 
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        padding: 4,
        width: '50%',
        height: Dimensions.get('window').width/2,
    },
    card: {
        flex: 1,
        //borderWidth: 1,
        //borderColor: CoresSicoob.cinzas.cor3,
    },
    cardTitleWrapper: {
        backgroundColor: CoresSicoob.cinzas.cor4,
        opacity: .7,              
        height: 50,
        width: '100%',

        position: 'absolute',
        bottom: 0,

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,

        alignItems: 'center',
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',        
    },
    firstColumn: {
        paddingLeft: 4,
        paddingRight: 2,
    },
    lastColumn: {
        paddingLeft: 2,
        paddingRight: 4,
    },
});

export default SerieCard;