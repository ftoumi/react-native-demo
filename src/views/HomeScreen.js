import React from 'react'
import {SafeAreaView, StyleSheet, Text, View, Image, FlatList, StatusBar } from 'react-native'

export default function HomeSceen() {

  const products = [
    {
      name: 'Produit 1',
      description: 'lorem ipsum dolor amet',
      image: 'https://image.flaticon.com/icons/png/128/628/628324.png'
    },
    {
      name: 'Produit 2',
      description: 'lorem ipsum dolor amet',
      image: 'https://image.flaticon.com/icons/png/128/1598/1598431.png'
    }
  ]

  const ProductItem = ({product}) => {
    return (
      <View style={styles.productLine}>
        <Image source={{ uri: product.image }} style={{ width: 50, height: 50, marginRight: 12}} />
        <View>
          <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 6}}>{product.name}</Text>
          <Text style={{ color: 'gray'}}>{product.description}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList 
        data={products}
        keyExtractor={item => item.name}
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