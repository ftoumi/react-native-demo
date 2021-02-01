import React, { useEffect, useState } from 'react'
import {SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'

//import products from '../../assets/data/products.json'

export default function HomeScreen({ navigation }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  },[])

  const getProducts = () => {
    fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
    .then((response) => response.json())
    .then((json) => setProducts(json.products))
    .catch((error) => console.error(error))
    //.finally(() => setLoading(false));
  }

  const ProductItem = ({product}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { product: product })}>
        <View style={styles.productLine}>
          <Image source={{ uri: product.image_url }} style={{ width: 50, height: 50, marginRight: 12}} />
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 6}}>{product.product_name}</Text>
            <Text style={{ color: 'gray'}}>{product.nutriscore_score}</Text>
          </View>
        </View>
      </TouchableOpacity>
      
    )
  }

  return (
    <SafeAreaView>
      <FlatList 
        data={products}
        keyExtractor={item => `product-${item.sortkey}`}
        renderItem={({item}) => <ProductItem product={item} />}
        ListHeaderComponent={<Text style={{ fontSize: 24, padding: 20}}>Mes produits</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  productLine: { 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    flex: 1, 
    flexDirection: 'row'
  }
})