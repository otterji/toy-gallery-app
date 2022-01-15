
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import earth from '../../assets/earth.png';
import profile from '../../assets/profile.png';
import edit from '../../assets/edit.png';
import MyGalleryScreen from '../screens/MyGalleryScreen';
import MyGalleryDetailScreen from '../screens/MyGalleryDetailScreen';
import { Image, Pressable, useToast } from 'native-base';
import { navigate } from './route';


const Stack = createNativeStackNavigator();


export function MyGalleryStack() {
  const toast = useToast();
  return (
    <Stack.Navigator initialRouteName="MyGallery" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background },
      headerTitleStyle: {
        fontFamily: "Belleza_400Regular"
      },
      headerRight: (props) => (
        <Pressable paddingX={5} onPress={() => toast.show({
          title: "Sorry :(",
          status: "warning",
          description: "This is not available in Betaflight",
          placement: "top"
        })}>
          <Image source={edit} alt="edit" />
        </Pressable>
      )
    }}
    >
      <Stack.Screen name="MyGallery" component={MyGalleryScreen} options={{ headerTitle: "Ateiler" }} options={{
        headerLeft: (props) => (
          <Pressable paddingX={5} onPress={() => navigate('Landing')}>
            <Image source={earth} alt="earth" />
          </Pressable>
        ),
        headerRight: (props) => (
          <Pressable paddingX={5} onPress={() => navigate('Profile')}>
            <Image source={profile} alt="profile" />
          </Pressable>
        ),
      }} />
      <Stack.Screen name="MyGalleryDetail" component={MyGalleryDetailScreen} options={({ route }) => ({ title: route.params.gallery.name })}/>
    </Stack.Navigator >
  );
}