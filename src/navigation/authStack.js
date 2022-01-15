import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import colors from '../styles/colors';
import SignupScreen from '../screens/SignupScreen';
import NameScreen from '../screens/NameScreen';
import { navigate } from './route';
import { Toast } from 'native-base';
import { getItemFromAsync } from '../hooks/requests';

const Stack = createNativeStackNavigator();

export function AuthStack() {

  const autoLogin = async () => {
    const idToken = await getItemFromAsync('idToken');
    if (idToken) {
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
    <Stack.Navigator initialRouteName={getInitialScreen()} screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background },
      headerTitleStyle: {
        fontFamily: "Belleza_400Regular"
      },
    }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign in' }} />
      <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: 'Sign up' }} />
      <Stack.Screen name="Name" component={NameScreen} options={{ title: 'Sign up' }} />
    </Stack.Navigator>
  );
}

