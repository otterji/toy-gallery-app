import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Box, Center, Flex, Text, Image, View, PresenceTransition } from 'native-base';
import { navigate } from '../../navigation/route';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import tncLogo from '../../../assets/tncLogo.png';

const screen = Dimensions.get('window');

function HomeScreen({ navigation }) {

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  // const [time, setTime] = useState(0);
  // // 시간 경과 체크를 위한 useEffect
  // useEffect(() => {
  //   const tick = setTimeout(() => {
  //     setTime(time + 1);
  //   }, 1000);

  //   // eslint-disable-next-line consistent-return
  //   return () => clearTimeout(tick);
  // }, [time]);


  return (
    <TouchableWithoutFeedback
      onPress={() => navigate('Auth')}
      style={{
        width: screen.width,
        height: screen.height,
        backgroundColor: "#6B4B37"
      }}>
      <Center flex={1} px="3">
        <PresenceTransition
          visible={true}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 500,
              delay: 0,
            },
          }}
        >
          <Text fontSize={18} color="#F0E8C1" style={{ marginTop: screen.height / 2 - 60, textAlign: 'center' }}>Art for us</Text>
        </PresenceTransition>
        <PresenceTransition
          visible={true}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1000,
              delay: 700,
            },
          }}
        >
          <Flex direction="row">
            <Text fontSize={45} color="#F0E8C1" fontFamily="Roboto_400Regular" paddingTop="4px">e</Text>
            <Text fontSize={50} color="#F0E8C1" fontWeight={400} >art</Text>
            <Text fontSize={45} color="#F0E8C1" fontFamily="Roboto_400Regular" paddingTop="4px">h</Text>
          </Flex>
        </PresenceTransition>
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