// import React, {Component} from 'react';
import { View } from 'react-native';
import GlobalStyles from './src/GlobalStyles';
import AppContainer from './src/Components/Nav';
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {
  render(){
    return (
      <NavigationContainer> 
        <View style={{ flex:1 }}> 
          <View style = {GlobalStyles.topPadding} /> 
          <AppContainer />
        </View>
     </NavigationContainer>
    );
  }
  
}

export default App;



