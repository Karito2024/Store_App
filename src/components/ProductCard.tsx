import 'react-native-reanimated';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Product } from '../types/products';

const ProductCard = ({ product, navigation }: { product: Product, navigation: any }) => {
    const handlePress = () => {
        navigation.navigate('Detalles', { product }); 
    };
    
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View style={styles.card}>
                <Image 
                    source={{ uri: product.thumbnail }} 
                    style={styles.image}
                    resizeMode="contain"
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.brand}>{product.brand}</Text>
                    
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${product.price}</Text>
                        <Text style={styles.discount}>{product.discountPercentage}% OFF</Text>
                    </View>
                    
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ {product.rating}</Text>
                        <Text style={styles.stock}>{product.stock} disponibles</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        padding:8,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 15,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2c3e50',
    },
    brand: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        color: '#e74c3c',
        fontWeight: 'bold',
        marginRight: 10,
    },
    discount: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: '#e74c3c',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        color: '#f39c12',
    },
    stock: {
        color: '#27ae60',
    },
});

export default ProductCard;