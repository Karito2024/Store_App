import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import global from '../styles/global';

const ProductDetail = ({ route }: { route: any }) => {
    const { product } = route.params;

    return (

        <ScrollView style={global.container}>
            <ImageBackground
                source={require('../assets/cute-background.jpg')}
                style={global.authBackground}
                imageStyle={{ opacity: 0.3 }}>
                <View style={global.detailContainer}>
                    <Image
                        source={{ uri: product.thumbnail }}
                        style={global.productImage}
                        resizeMode="contain"
                    />

                    <Text style={global.productTitle}>{product.title}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={global.productPrice}>${product.price}</Text>
                        <Text style={global.discountBadge}>{product.discountPercentage}% OFF</Text>
                    </View>

                    <Text style={global.productDescription}>{product.description}</Text>

                    <View style={global.ratingContainer}>
                        <Text style={global.ratingText}>Rating: {product.rating}/5</Text>
                    </View>

                    <View style={global.detailRow}>
                        <Text style={global.detailLabel}>Brand:</Text>
                        <Text style={global.detailValue}>{product.brand}</Text>
                    </View>

                    <View style={global.detailRow}>
                        <Text style={global.detailLabel}>Category:</Text>
                        <Text style={global.detailValue}>{product.category}</Text>
                    </View>

                    <View style={global.detailRow}>
                        <Text style={global.detailLabel}>Stock:</Text>
                        <Text style={global.detailValue}>{product.stock} units</Text>
                    </View>

                    <View style={global.galleryContainer}>
                        <Text style={global.subHeader}>More Images</Text>
                        <ScrollView horizontal>
                            {product.images.map((img: string, index: number) => (
                                <Image
                                    key={index}
                                    source={{ uri: img }}
                                    style={global.galleryImage}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView >

    );
};

export default ProductDetail;