import React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/views/HomeScreen'
import DetailsScreen from './src/views/DetailsScreen'
import AddProduct from './src/views/AddProduct'

const RootStack = createStackNavigator();
const Stack = createStackNavigator();


export default function App() {

  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator 
        mode="modal"
        screenOptions={{
          headerShown: false
        }}
      >

      <Stack.Screen name="MainStack" component={MainStack} />
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

      </RootStack.Navigator>
    </NavigationContainer>
  );
}
