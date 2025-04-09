import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator /> {/* Solo un navegador raíz */}
    </NavigationContainer>
  );
};

export default App;