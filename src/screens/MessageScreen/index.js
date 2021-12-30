import { Box, Text, Pressable, Flex, Image, useToast } from 'native-base';
import React, { useState } from 'react';
import colors from '../../styles/colors';
import chatImg1 from '../../../assets/chatImg1.png';
import chatImg2 from '../../../assets/chatImg2.png';
import { Toast } from 'native-base';


function MessageScreen({ navigation }) {
  const toast = useToast();


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
    <Pressable onPress={() =>
      toast.show({
        title: "Sorry :(",
        status: "warning",
        description: "This is not available in Betaflight",
        placement: "top"
      })
    }>
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
    </Pressable>
  )

  return (
    <Box paddingX="15px" width="100%" height="100%" pt={10}>
      {
        sampleChat.map((x) => (
          <Box key={`chatList-${x.id}`}>
            {ChatBox(x)}
          </Box>
        ))
      }
    </Box >
  )
};

export default MessageScreen;