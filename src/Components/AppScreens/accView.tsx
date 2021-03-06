import React,  { FC, useState }from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import { Account, Accounts } from '../Accounts';
import ListAccount from './listAccounts';

function AccView ({navigation}) => {

// const AccView: FC = ({navigation}) => {

    // const [ accounts, setAccounts ] = useState<Account[] | null>(null);
    // const [ accounts, setAccounts ] = useState<null>; /*| null>(null);*/
    
    return(
        <FlatList 
            data={Accounts} 
            renderItem={({ item }) => ( 
                <ListAccount id={item.id} 
                    accName={item.accName} 
                    accBalance={item.accBalance}
                />
            )} 
        />
    );
}
export default AccView;

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