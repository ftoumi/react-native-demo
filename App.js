import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

import HomeSceen from './src/views/HomeScreen'


export default function App() {

  return (
    <HomeSceen />
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
