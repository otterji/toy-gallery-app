
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import MyGalleryScreen from '../screens/MyGalleryScreen';
import MyGalleryDetailScreen from '../screens/MyGalleryDetailScreen';


const Stack = createNativeStackNavigator();

export function MyGalleryStack() {
  return (
    <Stack.Navigator initialRouteName="MyGallery" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background }
    }}>
      <Stack.Screen name="MyGallery" component={MyGalleryScreen} options={() => ({
        headerShown: false,
      })} />
      <Stack.Screen name="MyGalleryDetail" component={MyGalleryDetailScreen} />
    </Stack.Navigator >
  );
}