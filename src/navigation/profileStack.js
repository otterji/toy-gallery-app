
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import MyPageScreen from '../screens/MyPageScreen';
import settings from '../../assets/settings.png';
import { Image, Pressable } from 'native-base';
import { navigate } from './route';
import SettingScreen from '../screens/SettingScreen';


const Stack = createNativeStackNavigator();

export function profileStack() {
  return (
    <Stack.Navigator initialRouteName="MyPage" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background }
    }}>
      <Stack.Screen name="MyPage" component={MyPageScreen} options={{ headerTitle: "My Room" }} options={{
        headerRight: (props) => (
          <Pressable paddingX={5} onPress={() => navigate('Settings')}>
            <Image source={settings} alt="settings" />
          </Pressable>
        ),
      }} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator >
  );
}