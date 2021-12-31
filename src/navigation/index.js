import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './authStack';
import { Main } from './mainStack';
import { profileStack } from './profileStack';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Profile" component={profileStack} />
    </Stack.Navigator >
  );
};

