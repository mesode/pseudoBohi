import React from 'react';
import Navigator from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from './Welcome';
import Login from './LogIn';
import First from './AppScreens/First';
import Second from './AppScreens/Second';
import AccView from './AppScreens/accView';
import ListAccount from './AppScreens/listAccounts';

const screens = {
    Welcome: {
        screen: Welcome
    },
    Login: {
        screen: Login
    },
    Accounts: {
        screen: ListAccount
    }
    // Second: {
    //     screen: Second
    // }
}

const HomeStack = createStackNavigator(screens);
const AppContainer = createAppContainer(HomeStack);

export default AppContainer;

