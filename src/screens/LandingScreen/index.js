import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Center, Text, Image, Pressable, Flex, VStack } from 'native-base';
import { navigate } from '../../navigation/route';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../../src/styles/colors';
import atelier from '../../../assets/atelier.png';
import funding from '../../../assets/funding.png';
import magazine from '../../../assets/magazine.png';
import message from '../../../assets/message.png';
import myGallery from '../../../assets/myGallery.png';

const screen = Dimensions.get('window');


const imgList = [
  {
    id: 0,
    imgSource: atelier,
    link: 'AtelierStack',
    marginTop: '50px'
  },
  {
    id: 1,
    imgSource: funding,
    link: 'FundingStack',
    marginTop: '31px'
  },
  {
    id: 2,
    imgSource: myGallery,
    link: 'MyGalleryStack',
    marginTop: '39px'
  },
  {
    id: 3,
    imgSource: magazine,
    link: 'MagazineStack',
    marginTop: '58px'
  },
  {
    id: 4,
    imgSource: message,
    link: 'Message',
    marginTop: '64px'
  },
]


function LandingScreen({ navigation }) {

  return (
    <TouchableWithoutFeedback style={{ width: screen.width, height: screen.height }}>
      <Box marginY={30} marginLeft={26}>
        <Flex direction="row">
          <Text fontSize={45} color={colors.secondary} fontFamily="Roboto_400Regular" paddingTop="4px">e</Text>
          <Text fontSize={50} color={colors.secondary} fontWeight={400} >art</Text>
          <Text fontSize={45} color={colors.secondary} fontFamily="Roboto_400Regular" paddingTop="4px">h</Text>
        </Flex>
        <Text fontSize={14} color="#D5C9A5">
          {`Our EARTH is a platform that connects upcycling artists and the public. Join the arts movement for the planet. Explore and purchase a variety of upcycling art pieces.`}
        </Text>
      </Box>
      <Center backgroundColor={colors.secondary} paddingX={5} flex={1} width={screen.width}>
        <VStack alignItems="center" width={screen.width} space={7} >
          {imgList.map((x) => (
            <Pressable onPress={() => navigate(`${x.link}`)} key={`landing-${x.id}`}>
              <Image
                alt={`${x.imgSource}`}
                source={x.imgSource}
              />
            </Pressable>
          ))}
        </VStack>
      </Center>
    </TouchableWithoutFeedback >
  )
};

export default LandingScreen;