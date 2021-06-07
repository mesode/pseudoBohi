import React from 'react';
import {
    StyleSheet,
    Text,
    View,
 
} from 'react-native';

export default function First () {
    
    return(
            <View>
                <Text> My Dashboard </Text>
            </View>
    );
}

const styles = StyleSheet.create ({
    accountsHead: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'grey',
        color: 'black'
    },
    accounts: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    }
});


