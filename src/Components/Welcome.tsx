import React, { Component } from 'react';
import {
    View, Button,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

function Welcome ( navigation: { push: (arg0: string) => void; } ) {
    const pressHandler = () => {
      // navigation.navigate('Login');
      navigation.push('Login');
    }
    return(
        <View style={styles.container}>
           <Text style={styles.textGreet}>Hello! How are you doing?</Text>
           <Text style={styles.textWelcome}>Welcome! To begin click below.</Text>
           <Button title="START"  onPress={pressHandler}/>
           {/* <TouchableOpacity 
                onPress = {pressHandler}>
                    <Text style={{color:'red'}}>START!</Text>
           </TouchableOpacity> */}
       </View> 
    );
}

export default Welcome;

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#48D1CC', 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    textGreet: {
      // flex: 1,
      color: '#000000', 
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingTop: 200
    },
    textWelcome: {
      color: '#000000', 
      justifyContent: 'center', 
      alignItems: 'center'
    }
  });