import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Center, Text } from 'native-base';
import { navigate } from '../../navigation/route';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const screen = Dimensions.get('window');


function HomeScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigate('Auth')} style={{ width: screen.width, height: screen.height }}>
      <Center flex={1} px="3">
        <Text fontSize={45} italic bold>earth</Text>
      </Center>
    </TouchableWithoutFeedback>

  )
};

export default HomeScreen;