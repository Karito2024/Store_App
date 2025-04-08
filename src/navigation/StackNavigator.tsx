//StackNavigator
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import HomeScreen from '../screen/HomeScreen';
import ProductDetail from '../screen/ProductDetail';

//Crear el stack de navegacion
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name='Login' component={LoginScreen}
                options={{ title: 'Iniciar Sesion' }} />

            <Stack.Screen name='Register' component={RegisterScreen}
                options={{ title: 'Registro' }} />

            <Stack.Screen name='Home' component={HomeScreen}
                options={{ title: 'Bienvenido' }} />
                
            <Stack.Screen name='Detalles' component={ProductDetail}
                options={{ title: 'Detalles' }} />

        </Stack.Navigator>
    )
}

export default StackNavigator