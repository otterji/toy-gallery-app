
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import MagazineScreen from '../screens/MagazineScreen';
import { Pressable, Image } from 'native-base';
import MagazineDetailScreen from '../screens/MagazineDetailScreen';
import earth from '../../assets/earth.png';
import profile from '../../assets/profile.png';
import { navigate } from './route';


const Stack = createNativeStackNavigator();

export function MagazineStack() {
  return (
    <Stack.Navigator initialRouteName="Magazine" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background },
      headerTitleStyle: {
        fontFamily: "Belleza_400Regular"
      },
    }}>
      <Stack.Screen name="Magazine" component={MagazineScreen} options={{
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
      <Stack.Screen name="MagazineDetail" component={MagazineDetailScreen} options={({ route }) => ({ title: route.params.magazineTitle })} />
    </Stack.Navigator >
  );
}