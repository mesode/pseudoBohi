import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View } from 'react-native';
import GlobalStyles from './src/GlobalStyles';
import AppContainer from './src/Components/Nav';


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



