import 'react-native-reanimated';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import ProductDetail from '../screen/ProductDetail';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detalles" component={ProductDetail} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;