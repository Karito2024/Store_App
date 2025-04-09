import 'react-native-reanimated';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from '../styles/global';

const LoginScreen = ({ navigation }: any) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const manejarLogin = async () => {
        if (!correo || !password) {
            Alert.alert('Oops!', 'Todos los campos son obligatorios');
            return;
        }

        try {
            const data = await AsyncStorage.getItem('usuarios');
            const usuarios = data ? JSON.parse(data) : [];

            const usuario = usuarios.find((u: any) => u.email === correo && u.password === password);

            if (usuario) {
                await AsyncStorage.setItem('usuarioActivo', JSON.stringify(usuario));
                navigation.replace('Main', { user: usuario.nombre }); // Cambiado a 'Main'
            } else {
                Alert.alert('Oops!', 'Credenciales incorrectas');
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo validar el usuario');
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/cute-background.jpg')} 
            style={global.authBackground}
            imageStyle={{ opacity: 0.3 }}
        >
            <View style={global.authContainer}>
                <Text style={global.authTitle}> Inicia Sesión </Text>
                
                <TextInput
                    placeholder="Correo"
                    placeholderTextColor="#ffb6c1"
                    style={global.authInput}
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="email-address"
                />

                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#ffb6c1"
                    secureTextEntry
                    style={global.authInput}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={global.authButton} onPress={manejarLogin}>
                    <Text style={global.authButtonText}>Ingresar</Text>
                </TouchableOpacity>

                <Text style={global.authFooterText}>
                    ¿No tienes cuenta? {' '}
                    <Text 
                        style={global.authLinkText}
                        onPress={() => navigation.navigate('Register')}
                    >
                        Regístrate
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;