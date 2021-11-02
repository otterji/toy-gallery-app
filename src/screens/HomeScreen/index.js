import React from 'react';
import { Box, Center, Text } from 'native-base';
import { navigate } from '../../navigation/route';


function HomeScreen({ navigation }) {
  return (
    <Center flex={1} px="3" >
      <Text fontSize={45} italic bold onTouchStart={() => navigate('Auth')}>earth</Text>
    </Center>
  )
};

export default HomeScreen;