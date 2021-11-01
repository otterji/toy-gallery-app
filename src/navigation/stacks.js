import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginInScreen from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();


export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Welcome" component={LoginInScreen}  ></Stack.Screen>
    </Stack.Navigator>
  );
}