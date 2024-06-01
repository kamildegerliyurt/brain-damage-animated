import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ProductList from './screens/ProductList'
import ProductDetails from './screens/ProductDetails'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='ProductList'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})