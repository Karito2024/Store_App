import React from 'react'
import { Image, Text, View } from 'react-native';
import global from '../styles/global';

const ProductDetail = ({ route }: { route: any }) => {
    const { product } = route.params;
    return (
        <View style={global.container2}>
            <Image source={{ uri: product.images }} style={global.image2} />

            <View style={global.infoContainer}>
                <Text>Código:{product.id}</Text>
                <Text>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text>Precio: {product.price}</Text>
                <Text>Descuento: {product.discountPercentage}</Text>
                <Text>Valoración: {product.rating}</Text>
                <Text>Stock: {product.stock}</Text>
                <Text>Marca: {product.brand}</Text>
                <Text>Categoria: {product.category}</Text>
                <Image source={{ uri: product.thumbnail }}/>
            </View>
        </View>

    )
}

export default ProductDetail
