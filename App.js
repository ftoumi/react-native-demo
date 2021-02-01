import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

import  SearchBar  from './src/components/SearchBar'


export default function App() {


  return (
    <ScrollView style={{ flex: 1}}>
       <View style={styles.container}>
        <SearchBar />
      </View>
      <View style={[styles.container, { flex: 2 }]}>
        <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={[styles.container, { flex: 2 }]}>
        <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
        />
      </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
