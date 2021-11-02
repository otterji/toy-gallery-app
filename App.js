import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { navigationRef } from './src/navigation/route';
import { Provider } from 'react-redux';
import store from './src/store';
import colors from './src/styles/colors';

const navigationTheme = {
  colors: {
    background: colors.background,
    text: colors.textPrimary,
    border: 'none',
  },
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <NativeBaseProvider>
          <RootStack />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>

  );
}