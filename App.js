
import React, { useState } from 'react';
import RootStack from './src/navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { navigationRef } from './src/navigation/route';
import { Provider } from 'react-redux';
import store from './src/store';
import colors from './src/styles/colors';
import AppLoading from 'expo-app-loading';
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import { Belleza_400Regular } from '@expo-google-fonts/belleza';


const navigationTheme = {
  colors: {
    background: colors.background,
    text: colors.textPrimary,
    border: 'none',
  },
}

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Belleza_400Regular"
      }
    },
    Toast: {
      baseStyle: {},
      defaultProps: {
        placement: "top",
        duration: 6000,
      },
      variants: {},
      sizes: {},
    },
  },
});

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Belleza_400Regular
  });



  if (!fontsLoaded) {
    console.log('loading')
    return (
      <AppLoading
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <NativeBaseProvider theme={theme}>
          <RootStack />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}