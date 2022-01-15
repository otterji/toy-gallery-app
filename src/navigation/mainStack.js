import React from 'react';
import { AteilerStack } from './ateilerStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import MessageScreen from '../screens/MessageScreen';
import earth from '../../assets/earth.png';
import profile from '../../assets/profile.png';
import { Image, Pressable, Text } from 'native-base';
import { navigate } from './route';
import { MagazineStack } from './MagazineStack';
import { MyGalleryStack } from './MyGalleryStack';
import { FundingStack } from './fundingStack';
import colors from '../styles/colors';

const Drawer = createDrawerNavigator();


export function Main(params) {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background },
      headerTitleStyle: {
        fontFamily: "Belleza_400Regular"
      },
      headerLeft: (props) => (
        <Pressable paddingX={9} onPress={() => navigate('Landing')} >
          <Image source={earth} alt="earth" />
        </Pressable>
      ),
      headerRight: (props) => (
        <Pressable paddingX={9} onPress={() => navigate('Profile')}>
          <Image source={profile} alt="profile" />
        </Pressable>
      )
    }}>
      <Drawer.Screen name="Home" component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Drawer.Screen name="Landing" component={LandingScreen} options={() => ({
        headerShown: false,
      })} />
      <Drawer.Screen name="AtelierStack" component={AteilerStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Message" component={MessageScreen}/>
      <Drawer.Screen name="MagazineStack" component={MagazineStack} options={{ headerShown: false }} />
      <Drawer.Screen name="FundingStack" component={FundingStack} options={{ headerShown: false }} />
      <Drawer.Screen name="MyGalleryStack" component={MyGalleryStack} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}