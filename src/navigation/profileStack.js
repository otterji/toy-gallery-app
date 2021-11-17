
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import MyPageScreen from '../screens/MyPageScreen';

const Stack = createNativeStackNavigator();

export function profileStack() {
  return (
    <Stack.Navigator initialRouteName="MyPage" screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.background }
    }}>
      <Stack.Screen name="MyPage" component={MyPageScreen} options={{ headerTitle: "My Room" }} options={{
        // headerRight: (props) => (
        //   <Pressable paddingX={5} onPress={() => navigate('MyPage')}>
        //     <Image source={profile} alt="profile" />
        //   </Pressable>
        // ),
      }} />
    </Stack.Navigator >
  );
}