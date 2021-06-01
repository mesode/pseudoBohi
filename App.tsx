import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View } from 'react-native';
import GlobalStyles from './src/GlobalStyles';
import Login from './src/Components/LogIn';
import Welcome from './src/Components/Welcome';
import First from './src/Components/First';
import AppContainer from './src/Components/Nav';
import 'react-native-gesture-handler';

class App extends Component {
  render(){
    return (
      <View style={{ flex:1 }}> 
        <View style = {GlobalStyles.topPadding} /> 
        <AppContainer />
     </View>
    );
  }
  
}

export default App;



