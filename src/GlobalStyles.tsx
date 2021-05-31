import React from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = StyleSheet.create ({
    topPadding: {
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#ADD8E6',
    },
    container: {
        backgroundColor: '#48D1CC', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textGreet: {
        color: '#000000', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textWelcome: {
        color: '#EE0000', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    body: {
        backgroundColor: '#48D1CC',
    }
});

export default GlobalStyles;
    