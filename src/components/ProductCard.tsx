import React from 'react'
import { Product } from '../types/products'
import { Image, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';


const ProductCard = ({ product, navigation }: { product: Product, navigation: any }) => {
    const handlePress = () => {
        navigation.navigate('Detalles', { product }); 
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
                <Image source={{ uri: product.thumbnail }}/>
                <Text>{product.id}</Text>
                <Text>{product.title}</Text>
                <Image />
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard
