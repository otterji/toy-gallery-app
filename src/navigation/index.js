import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './stacks';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import colors from '../styles/colors';
import LandingScreen from '../screens/LandingScreen';
import AtelierScreen from '../screens/AtelierScreen';
import MessageScreen from '../screens/MessageScreen';
import earth from '../../assets/earth.png';
import profile from '../../assets/profile.png';
import { Image, Pressable } from 'native-base';
import { navigate } from './route';

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
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerTitleAlign: "center",
      headerLeft: (props) => (
        <Pressable paddingX={5} onPress={() => navigate('Landing')}>
          <Image source={earth} alt="earth" />
        </Pressable>
      ),
      headerRight: (props) => (
        <Pressable paddingX={5}>
          <Image source={profile} alt="profile" />
        </Pressable>
      ),
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={() => ({
        headerShown: false,
      })} />
      <Drawer.Screen name="Landing" component={LandingScreen} options={() => ({
        headerShown: false,
      })} />
      <Drawer.Screen name="Atelier" component={AtelierScreen} />
      <Drawer.Screen name="Message" component={MessageScreen} />
    </Drawer.Navigator>
  )
}