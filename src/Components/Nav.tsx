import React from 'react';
import Navigator from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from './Welcome';
import Login from './LogIn';
import First from './First';

const screens = {
    Welcome: {
        screen: Welcome
    },
    Login: {
        screen: Login
    },
    First: {
        screen: First
    }
}

const HomeStack = createStackNavigator(screens);
const AppContainer = createAppContainer(HomeStack);

export default AppContainer;

