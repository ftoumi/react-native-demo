import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './src/views/HomeScreen'
import DetailsScreen from './src/views/DetailsScreen'
import AddProduct from './src/views/AddProduct'
import ScannerScreen from './src/views/ScannerScreen'
import FavScreen from './src/views/FavScreen'

import * as theme from './src/config/theme'

const ModalStack = createStackNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {

  const ScanTabIcon = (tabInfo) => {
    return (
      <View style={theme.styles.scanTab}>
        <Ionicons name="scan" size={38} color={tabInfo.color} />
      </View>
    )
  }

  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen 
          name="AddProduct" 
          component={AddProduct} 
          options={{
            cardOverlayEnabled: true,
            cardStyle: {
              backgroundColor: 'transparent',
            },
            cardOverlay: () => {
              return(
                <View style={{ flex:1, backgroundColor: 'black', opacity: .5}}></View>
              )
            }
          }}
        />

      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>

      <Tab.Navigator 
        tabBarOptions={{
          tabStyle: theme.styles.tabBar,
          labelStyle: theme.styles.tabBarLabel,
          activeTintColor: 'white',
          inactiveTintColor: 'black'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={MainStack} 
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: (tabInfo) => <Ionicons name="home" size={24} color={tabInfo.color} />
          }}
        />
        <Stack.Screen 
          name="Scanner" 
          component={ScannerScreen} 
          options={{
            tabBarLabel: "Scanner",
            tabBarIcon: ScanTabIcon
          }}
        />

        <Stack.Screen 
          name="Favoris" 
          component={FavScreen} 
          options={{
            tabBarLabel: "Favoris",
            tabBarIcon: (tabInfo) => <Ionicons name="heart" size={24} color={tabInfo.color} />
          }}
        />

      </Tab.Navigator>

      
    </NavigationContainer>
  );
}
