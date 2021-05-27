import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Button } from 'react-native';
import WelView from './welView';
import viewApp from './welView';

const MainApp = () => {
    const handlePress = () => false;
    return(
        <View>
            <WelView /> 
            <View style={styles.container}>
                <Text style={styles.textGreet}>
                    Hello! How are you doing?
                </Text>
                <Text style={styles.textWelcome}>
                    Welcome! To begin click on the button below!
                </Text>
                <Button 
                    onPress = {handlePress}
                    title = 'START'
                    // color = 'blue'
                />
            </View>
        </View>
    );
};

export default MainApp;

const styles = StyleSheet.create ({
    container: {
        flex:1, 
        backgroundColor: '#48D1CC', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textGreet: {
        flex: 1,
        color: '#000000', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textWelcome: {
        flex: 1,
        color: '#EE0000', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button: {

    }
});