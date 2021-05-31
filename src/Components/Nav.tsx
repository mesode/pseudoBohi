import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity, 
    StyleSheet } from 'react-native';
import Navigator from 'react-navigation';
import Welcome from './Welcome';
import Login from './LogIn';
// import Title from './Title';
// import SmallText from './SmallText';
// import * as globalStyles from '../styles/global';

const LOGIN_ROUTE = {
    title: 'LOGIN TO YOUR ACCOUNT',
    component: Login
};
const WELCOME_ROUTE = {
    title: 'WELCOME',
    component: Welcome,
    props: {
        nextScene: LOGIN_ROUTE
    }
};

export default class Nav extends Component {
    renderScene(route: any, navigator: any) {
        return (
            <route.component
                {...route.props}
                navigator={navigator}
            />
        );
    }
    renderLeftButton(route: any, navigator: any, index: number) {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableOpacity
                style={styles.leftButton}
                onPress={() => navigator.pop()}
            >
                <Text>Back!</Text>
                {/* <SmallText>Back</SmallText> */}
            </TouchableOpacity>
        );
    }
    renderTitle(route: any) {
        return (
            <Text style={styles.title}>{route.title}</Text>
            // <Title style={styles.title}>
            //     {route.title}
            // </Title>
        );
    }
    renderNavigationBar() {
        return (
            <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: this.renderLeftButton,
                    RightButton: () => null,
                    Title: this.renderTitle
                }}
                style={styles.navbar}
            />
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={WELCOME_ROUTE}
                renderScene={this.renderScene}
                navigationBar={this.renderNavigationBar()}
            />
        );
    }
}


const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'blue',
    },
    leftButton: {
        padding: 10
    },
    title: {
        padding: 6,
        backgroundColor: 'orange'
    }
});
