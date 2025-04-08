import React, { useEffect, useState } from 'react'
import { Product } from '../types/products';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';
import api from '../api/api';
import global from '../styles/global';


const HomeScreen = ({ route }: any) => {
    const { user } = route.params;
    const [products, setProducts] = useState<Product[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data: { products} } = await api.get<{ results: Product[] }>('/products');

                setProducts(products);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

  return (
       <ScrollView style={global.container}>
        <Text></Text>
        {products.map((p) => (
            <ProductCard key={p.id} product={p} navigation={navigation} />
        ))}
       </ScrollView>
    )
}

export default HomeScreen
