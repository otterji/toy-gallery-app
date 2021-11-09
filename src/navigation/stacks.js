import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import colors from '../styles/colors';
import SignupScreen from '../screens/SignupScreen';
import NameScreen from '../screens/NameScreen';
import SignupCompletedScreen from '../screens/SignUpCompletedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from './route';
import { Toast, useToast } from 'native-base';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  AsyncStorage.getItem('userId', (err, result) => {
    if (result) {
      Toast.show({
        title: '자동으로 로그인 되었습니다.',
        placement: "top",
        status: "success",
        duration: 6000,
      })
      navigate('Landing');
    }
  })
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center", headerStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} ></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: 'Sign Up' }} ></Stack.Screen>
      <Stack.Screen name="Name" component={NameScreen} options={{ title: 'Sign Up' }} ></Stack.Screen>
      <Stack.Screen name="SignUpCompleted" component={SignupCompletedScreen} options={{ title: 'Welcome' }} ></Stack.Screen>
    </Stack.Navigator>
  );
}