import React, { FC } from 'react';
import { Account } from '../Accounts';
import { View, Text, StyleSheet } from 'react-native';

const ListAccounts: FC<Account> = (props) => {
    return (
        <View style = {styles.container}>
            <View 
                style = {{ 
                ...styles.listAccounts, 
                alignItems: 'flex-start',
                }}
            >
                <Text>{props.accName}</Text>
            </View>
            <View style={{...styles.listAccounts, alignItems: 'flex-end'}}>
                <Text>{props.accBalance}</Text>
            </View>
        </View>
    )
}
export default ListAccounts;

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 10,
    },
    listAccounts: {
        flex: 0.5,
        justifyContent: 'center',
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16,
    },
});