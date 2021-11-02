import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import colors from '../styles/colors';
import SignupScreen from '../screens/SignupScreen';
import NameScreen from '../screens/NameScreen';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center", headerStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome' }} ></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: 'Sign Up' }} ></Stack.Screen>
      <Stack.Screen name="Name" component={NameScreen} options={{ title: 'Sign Up' }} ></Stack.Screen>
    </Stack.Navigator>
  );
}