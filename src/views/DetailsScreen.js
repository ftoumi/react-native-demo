import React, { useEffect, useState } from 'react'
import {ScrollView, StyleSheet, Text, View, Image, Dimensions} from 'react-native'
const { width, height } = Dimensions.get('screen')

import * as theme from '../config/theme'

export default function DetailsScreen({ route }) {
  const { product } = route.params

  return (
    <View style={theme.styles.container}>
      <Text style={{ fontSize: 28, color: theme.TEXT_COLOR}}>{product.product_name}</Text>
      <ScrollView>
        <Image source={{ uri: product.image_url }} style={{ width: width-40, height: width-40, marginRight: 12}} resizeMode="cover" />
        <Image source={{ uri: product.image_url }} style={{ width: width-40, height: width-40, marginRight: 12}} resizeMode="cover" />
      </ScrollView>
     
    </View>
  )
}