import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import colors from '../styles/colors';
import SignupScreen from '../screens/SignupScreen';
import NameScreen from '../screens/NameScreen';
import SignupCompletedScreen from '../screens/SignUpCompletedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from './route';
import { Toast, useToast } from 'native-base';
import { getItemFromAsync } from '../hooks/requests';

const Stack = createNativeStackNavigator();

export function AuthStack() {

  const autoLogin = async () => {
    const userId = await getItemFromAsync('userId');
    if (userId) {
      Toast.show({
        title: 'You are automatically signed in',
        placement: "top",
        status: "success",
        duration: 6000,
      })
      return navigate('Landing');
    }
  }

  async function getInitialScreen() {
    await autoLogin();
  }


  return (
    <Stack.Navigator initialRouteName={getInitialScreen()} screenOptions={{ headerTitleAlign: "center", headerStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign in' }} />
      <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: 'Sign up' }} />
      <Stack.Screen name="Name" component={NameScreen} options={{ title: 'Sign up' }} />
      <Stack.Screen name="SignUpCompleted" component={SignupCompletedScreen} options={{ title: 'Welcome' }} />
    </Stack.Navigator>
  );
}

