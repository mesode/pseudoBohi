import React from 'react';
import Navigator from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from './Welcome';
import Login from './LogIn';

const screens = {
    Welcome: {
        screen: Welcome
    },
    Login: {
        screen: Login
    }
}

const HomeStack = createStackNavigator(screens);
const AppContainer = createAppContainer(HomeStack);

export default AppContainer;

