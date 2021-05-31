import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View } from 'react-native';
import GlobalStyles from './src/GlobalStyles';
import Login from './src/Components/LogIn';
import Welcome from './src/Components/Welcome';
import Nav from './src/Components/Nav';

class App extends Component {
  render(){
    return (
      <View style={{ flex:1 }}> 
        <View style = {GlobalStyles.topPadding} /> 
        <Nav />
     </View>
    );
  }
  
}

export default App;



