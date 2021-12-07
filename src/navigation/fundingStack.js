
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import { Pressable, Image } from 'native-base';
import earth from '../../assets/earth.png';
import profile from '../../assets/profile.png';
import { navigate } from './route';
import FundingScreen from '../screens/FundingScreen';
import FundingDetailScreen from '../screens/FundingDetailScreen';


const Stack = createNativeStackNavigator();

export function FundingStack() {
  return (
    <Stack.Navigator initialRouteName="Funding" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background }
    }}>
      <Stack.Screen name="Funding" component={FundingScreen} options={{ headerTitle: "Ateiler" }} options={{
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
      <Stack.Screen name="FundingDetail" component={FundingDetailScreen} options={({ route }) => ({ title: `Funding-${route.params.targetFunding.id + 1}` })} />
    </Stack.Navigator >
  );
}