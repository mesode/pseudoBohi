// import React, {Component} from 'react';
// import GlobalStyles from './GlobalStyles';
// import { SafeAreaView } from "react-native";

// class WelView extends Component {
//   render() {
//     return (
//       <SafeAreaView style={GlobalStyles.droidSafeArea}>
//           //More controls and such
//       </SafeAreaView>
//     );
//   }
// }
// export default WelView;




import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider,
  SafeAreaView,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

function WelView() {
  const insets = useSafeAreaInsets();

  return (
    <View 
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}
    />
  );
}

export default WelView;

