import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './stacks';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import colors from '../styles/colors';
import LandingScreen from '../screens/LandingScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} ></Stack.Screen>
      <Stack.Screen name="Auth" component={AuthStack}></Stack.Screen>
    </Stack.Navigator >
  );
}

function Main(params) {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "center" }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={() => ({
        headerShown: false,
      })} />
      <Drawer.Screen name="Landing" component={LandingScreen} options={() => ({
        headerShown: false,
      })} />
    </Drawer.Navigator>
  )
}