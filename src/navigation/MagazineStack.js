
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import MagazineScreen from '../screens/MagazineScreen';
import { Pressable, Image } from 'native-base';
import MagazineDetailScreen from '../screens/MagazineDetailScreen';

const Stack = createNativeStackNavigator();

export function MagazineStack() {
  return (
    <Stack.Navigator initialRouteName="Magazine" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background }
    }}>
      <Stack.Screen name="Magazine" component={MagazineScreen} options={() => ({
        headerShown: false,
      })} />
      <Stack.Screen name="MagazineDetail" component={MagazineDetailScreen} options={() => ({
        headerShown: false,
      })} />
    </Stack.Navigator >
  );
}