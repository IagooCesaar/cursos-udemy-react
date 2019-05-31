import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const FormRow = props => {
    const { children, first, last } = props; //Filhos do componente (outro conceito, além de propriedades do proprio componente)
    return  (
        <View style={[
                styles.container,
                first
                    ? styles.first
                    : last
                        ? styles.last
                        : null
            ]}>                
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'rgb(255, 255, 255)',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    },
    first:{
        marginTop: 10,
    },
    last:{
        marginBottom: 10,
    }
});

export default FormRow;