import { Box, Button, Center, Input, Text, Pressable, Flex, Image } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borderWidth } from 'styled-system';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';
import chatImg1 from '../../../assets/chatImg1.png';
import chatImg2 from '../../../assets/chatImg2.png';


function MessageScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();

  const sampleChat = [
    {
      id: 0,
      name: 'Ralph Edwards',
      text: 'Me: Yes, please :)',
      date: '10월 22일',
      imageUrl: chatImg1,
    },
    {
      id: 1,
      name: 'Kathryn Murphy',
      text: 'Katheryn : Thank you for...',
      date: '10월 20일',
      imageUrl: chatImg2,
    }
  ];

  const ChatBox = (_target) => (
    <Box ml={3} mb={5}>
      <Flex direction="row" _text={{ color: colors.textPrimary }}>
        <Image source={_target.imageUrl} mt={1} alt={_target.name} />
        <Box ml={3} mt={2}>
          <Text bold fontSize="16px">
            {_target.name}
          </Text>
          <Flex direction="row" _text={{ color: colors.gray[0] }}>
            <Text marginRight={3} >
              {_target.text}
            </Text>
            <Text fontSize="10px" mt={1}>
              {_target.date}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )

  return (
    <Box paddingX="15px" width="100%" height="100%" pt={10}>
      {
        sampleChat.map((x) => (
          <Box key={`chatList-${x.id}`} >
            {ChatBox(x)}
          </Box>
        ))
      }
    </Box >
  )
}

export default MessageScreen;