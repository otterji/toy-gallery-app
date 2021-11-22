import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Center, Flex, Text, Image, View } from 'native-base';
import { navigate } from '../../navigation/route';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import tncLogo from '../../../assets/tncLogo.png';

const screen = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigate('Auth')}
      style={{
        width: screen.width,
        height: screen.height,
        backgroundColor: "#6B4B37"
      }}>
      <Center flex={1} px="3">
        <Flex direction="row" style={{ marginTop: screen.height / 2 - 50 }}>
          <Text fontSize={45} color="#FFFDE7">e</Text>
          <Text fontSize={45} italic color="#FFFDE7">art</Text>
          <Text fontSize={45} color="#FFFDE7">h</Text>
        </Flex>
        <View style={{
          justifyContent: 'flex-end', flex: 1, marginBottom: 45
        }}>
          < Image source={tncLogo} alt="tnc-logo" ></Image>
        </View>
      </Center >
    </TouchableWithoutFeedback >

  )
};

export default HomeScreen;