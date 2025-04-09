import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Product } from '../types/products'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TextInput, View, ActivityIndicator, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import ProductCard from '../components/ProductCard'
import api from '../api/api'
import global from '../styles/global'
import Ionicons from 'react-native-vector-icons/Ionicons'




const HomeScreen = ({ route }: any) => {
    const { user } = route.params || {}; // Manejo seguro si params es undefined
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
    const navigation = useNavigation()

    // Configurar el botón de salir en el header
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Inicio',
            headerShown: true,
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            'Cerrar sesión',
                            '¿Deseas salir?',
                            [
                                { text: 'Cancelar', style: 'cancel' },
                                {
                                    text: 'Salir',
                                    style: 'destructive',
                                    onPress: () => navigation.navigate('Login' as never),
                                },
                            ]
                        )
                    }}
                    style={{ marginRight: 15 }}
                >
                    <Ionicons name="log-out-outline" size={24} color="black" />
                </TouchableOpacity>
            ),
        })
    }, [navigation])

    const fetchProducts = async (page = 1, search = '') => {
        try {
            setLoading(true)
            let url = `/products?limit=10&skip=${(page - 1) * 10}`

            if (search) {
                url = `/products/search?q=${search}&limit=10&skip=${(page - 1) * 10}`
            }

            const { data } = await api.get(url)

            setProducts(data.products)
            setTotalProducts(data.total)
            setTotalPages(Math.ceil(data.total / 10))
            setCurrentPage(page)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleSearch = () => {
        fetchProducts(1, searchQuery)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            fetchProducts(currentPage + 1, searchQuery)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            fetchProducts(currentPage - 1, searchQuery)
        }
    }

    return (
        <View style={global.container}>
            <ImageBackground
                source={require('../assets/cute-background.jpg')}
                style={global.authBackground}
                imageStyle={{ opacity: 0.3 }}>
                <Text style={global.header}></Text>

                <View style={global.searchContainer}>
                    <TextInput
                        style={global.searchInput}
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={handleSearch}
                    />
                    <TouchableOpacity style={global.searchButton} onPress={handleSearch}>
                        <Text style={global.searchButtonText}>Buscar</Text>
                    </TouchableOpacity>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#3498db" />
                ) : (
                    <>
                        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                            {products.map((p) => (
                                <ProductCard key={p.id} product={p} navigation={navigation} />
                            ))}
                        </ScrollView>

                        <View style={global.paginationContainer}>
                            <TouchableOpacity
                                style={global.searchButton}
                                onPress={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                <Text style={global.searchButtonText}>Anterior</Text>
                            </TouchableOpacity>

                            <Text style={global.pageText}>
                                Página {currentPage} de {totalPages}
                            </Text>

                            <TouchableOpacity
                                style={global.searchButton}
                                onPress={handleNextPage}
                                disabled={currentPage === totalPages}>
                                <Text style={global.searchButtonText}>Siguiente</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={global.totalText}>
                            Mostrando {products.length} de {totalProducts} productos
                        </Text>
                    </>
                )}
            </ImageBackground>
        </View>
    )
}

export default HomeScreen
