import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GlobalStyles from './src/GlobalStyles';
import Start from './start';

class App extends Component {
  render(){
    return (
      <View style={{ flex:1 }}> 
       <View style = {GlobalStyles.topPadding} />
       <View style={styles.container}>
           <Text style={styles.textGreet}>Hello! How are you doing?</Text>
           <Text style={styles.textWelcome}>Welcome! To begin click on the button below!</Text>
           <Start/>
       </View>
     </View>
    );
  }
  
}

export default App;

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
    color: '#EE0000', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#48D1CC',
  }
});

