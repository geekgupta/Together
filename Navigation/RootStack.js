import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen' ; 

const RootStack = () => {
  const Stack = createNativeStackNavigator(); // Create an instance of NativeStackNavigator

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} screenOptions = {{headerShown : true}} />

    </Stack.Navigator>
  );
};

export default RootStack;
