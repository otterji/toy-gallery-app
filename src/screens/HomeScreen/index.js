import React from 'react';
import { View } from 'react-native';
import { Box, Center, Text, NativeBaseProvider } from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../navigation/route';


function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" >
        {/* <Box width="100%" onTouchStart={() => { alert('touch!') }} textAlign="center"> */}
        <Text fontSize={45} italic bold onTouchStart={() => navigate('Auth')}>earth</Text>
        {/* </Box> */}
      </Center>
    </NativeBaseProvider>
  )
};

export default HomeScreen;