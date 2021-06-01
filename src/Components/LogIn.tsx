import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet } from 'react-native';

// class Login extends Component {
function Login ({ navigation }) {
    
    const state = {
    email: '',
    password: ''
    }

    // handleEmail = (text: string) => {
    // this.setState({ email: text })
    // }

    // handlePassword = (text: string) => {
    // this.setState({ password: text })
    // }

    // login = (email: string, pass: string) => {
    //     alert("email: " + email + "password: " + pass)
    // }

    const handlePress = () => {
        navigation.navigate('First');
    }

        return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText = {this.handleEmail}
                />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText = {this.handlePassword}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {handlePress}>
                    <Text 
                    style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        );
}
export default Login;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
        },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});