import React, { useState } from 'react';
import { Alert, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from '../styles/global';

const RegisterScreen = ({ navigation }: any) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const manejarRegistro = async () => {
        if (!nombre || !email || !pass) {
            Alert.alert('Oops!', 'Todos los campos son obligatorios');
            return;
        }

        try {
            const data = await AsyncStorage.getItem('usuarios');
            const usuarios = data ? JSON.parse(data) : [];
            const existe = usuarios.find((u: any) => u.email === email);
            
            if (existe) {
                Alert.alert('Oops!', 'El correo ya está registrado');
                return;
            }
            
            const nuevoUsuario = { nombre, email, password: pass };
            usuarios.push(nuevoUsuario);
            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
            Alert.alert('¡Yay!', 'Registro completado con éxito');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', 'Error al guardar el usuario');
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/cute-background.jpg')} 
            style={global.authBackground}
            imageStyle={{ opacity: 0.3 }}
        >
            <View style={global.authContainer}>
                {/* Decoraciones cute */}
                {/* <Image 
                    source={require('../assets/flower-decoration.png')}
                    style={[global.cuteDecoration, { top: 40, right: 30 }]}
                />
                <Image 
                    source={require('../assets/cloud-decoration.png')}
                    style={[global.cuteDecoration, { bottom: 60, left: 30 }]} 
                />*/}
                
                <Text style={global.authTitle}> Regístrate </Text>
                
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="#ffb6c1"
                    style={global.authInput}
                    value={nombre}
                    onChangeText={setNombre}
                />
                
                <TextInput
                    placeholder="Correo"
                    placeholderTextColor="#ffb6c1"
                    style={global.authInput}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#ffb6c1"
                    secureTextEntry
                    style={global.authInput}
                    value={pass}
                    onChangeText={setPass}
                />

                <TouchableOpacity style={global.authButton} onPress={manejarRegistro}>
                    <Text style={global.authButtonText}>Crear Cuenta</Text>
                </TouchableOpacity>

                <Text style={global.authFooterText}>
                    ¿Ya tienes cuenta? {' '}
                    <Text 
                        style={global.authLinkText}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Inicia Sesión
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;