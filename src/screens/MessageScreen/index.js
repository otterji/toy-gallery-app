import { Box, Text, Pressable, Flex, Image, useToast } from 'native-base';
import React from 'react';
import colors from '../../styles/colors';
import chatImg1 from '../../../assets/chatImg1.png';
import chatImg2 from '../../../assets/chatImg2.png';


function MessageScreen({ navigation }) {
  const toast = useToast();


  const sampleChat = [
    {
      id: 0,
      name: 'Nick Gentry',
      text: 'Nick: Hello, I add the two documents in...',
      date: 'Nov 29',
      imageUrl: chatImg1,
      color: '#D57162',
      haveDot: true,
    },
    {
      id: 1,
      name: 'Carmen Mardonez',
      text: 'Carmen: Sweet, see you then!',
      date: 'Nov 20',
      imageUrl: chatImg2,
      color: '#6B4B37',
      haveDot: false,
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
      <Box mx={2} mb={7}>
        <Flex direction="row" _text={{ color: colors.textPrimary }}>
          <Image source={_target.imageUrl} mt={1} alt={_target.name} />
          <Box ml={3}>
            {
              _target.haveDot
              ? (
                <Flex direction="row">
                <Text bold fontSize="16px" color="#6B4B37" fontFamily="Roboto_400Regular">
                  {_target.name}
                </Text>
                <Box backgroundColor="#D57162" width={2} height={2} borderRadius={5} mt={2} ml={3}/>
              </Flex>
              )
              : (
                <Text bold fontSize="16px" color="#6B4B37" fontFamily="Roboto_400Regular">
                  {_target.name}
                </Text>
              )
            }
            <Flex direction="row" _text={{ color: colors.gray[0] }}>
              <Text marginRight={3} fontFamily="Roboto_400Regular" color={_target.color}>
                {_target.text}
              </Text>
              <Text fontSize="10px" mt={1} color="#97806C" fontFamily="Roboto_400Regular">
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