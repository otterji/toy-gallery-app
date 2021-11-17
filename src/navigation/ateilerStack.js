import React from 'react';
import AtelierScreen from '../screens/AtelierScreen';
import earth from '../../assets/earth.png';
import profile from '../../assets/profile.png';
import { Image, Pressable } from 'native-base';
import { navigate } from './route';
import PieceDetailScreen from '../screens/PieceDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';

const Stack = createNativeStackNavigator();

export function AteilerStack() {
  return (
    <Stack.Navigator initialRouteName="Atelier" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background }
    }}>
      <Stack.Screen name="Atelier" component={AtelierScreen} options={{ headerTitle: "Ateiler" }} options={{
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
      <Stack.Screen name="PieceDetail" component={PieceDetailScreen} options={({ route }) => ({ title: route.params.pieceTitle })} />
    </Stack.Navigator >
  );
}
