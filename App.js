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


const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFDE7'
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={myTheme}>
        <NativeBaseProvider>
          <RootStack />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
