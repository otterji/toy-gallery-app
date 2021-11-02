import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import colors from '../styles/colors';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center", headerStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="Welcome" component={LoginScreen}  ></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignupScreen}  ></Stack.Screen>
    </Stack.Navigator>
  );
}