import React, { FC } from 'react';
import { Expense } from '../Expenses';
import { View, Text, StyleSheet } from 'react-native';

const ListExpenses: FC<Expense> = (props) => {
    return (
        <View style = {styles.container}>
            <View 
                style = {{ 
                ...styles.listExpenses, 
                alignItems: 'flex-start',
                }}
            >
                <Text>{props.name}</Text>
            </View>
            <View style={{...styles.listItem, alignItems: 'flex-end'}}>
                <Text>{props.price}</Text>
            </View>
        </View>
    )
}
export default ListExpenses;

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 10,
    },
    listExpenses: {
        flex: 0.5,
        justifyContent: 'center',
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16,
    },
});