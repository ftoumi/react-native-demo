import React, { useEffect, useState } from 'react'
import {ScrollView, StyleSheet, Text, View, Image, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('screen')

export default function DetailsScreen({ route }) {
  const { product } = route.params
  console.log(product)
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{ fontSize: 28}}>{product.product_name}</Text>
      <ScrollView>
        <Image source={{ uri: product.image_url }} style={{ width: width-40, height: width-40, marginRight: 12}} resizeMode="cover" />
        <Image source={{ uri: product.image_url }} style={{ width: width-40, height: width-40, marginRight: 12}} resizeMode="cover" />
      </ScrollView>
     
    </View>
  )
}