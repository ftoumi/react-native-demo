import React, { useEffect, useState } from 'react'
import {SafeAreaView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function AddProduct ({navigation}) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#CCC', marginTop: 120}}>
      <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
        
        <Text style={{flex:6, fontSize: 26}}>Ajouter un produit</Text>
        <Pressable 
          onPress={() => navigation.goBack()}
          style={{flex:1}}
        >
          <Ionicons name="close-circle-sharp" size={24} color="black" />
        </Pressable>
      </View>
    
    </SafeAreaView>
  )
}