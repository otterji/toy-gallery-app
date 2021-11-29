import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Center, Text, Image, Pressable } from 'native-base';
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
    link: '',
    marginTop: '31px'
  },
  {
    id: 2,
    imgSource: myGallery,
    link: '',
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

  const renderImg = (_target) => (
    <Pressable onPress={() => navigate(`${_target.link}`)} marginTop={_target.marginTop}>
      <Image
        alt={`${_target.imgSource}`}
        source={_target.imgSource}
      />
    </Pressable>
  )

  return (
    <TouchableWithoutFeedback style={{ width: screen.width, height: screen.height }}>
      <Box marginY={30} marginLeft={26}>
        <Text fontSize={45} italic color={colors.secondary} marginBottom="7px">earth</Text>
        <Text fontSize={14} color="#E7DFC2">
          {`Hi, we’re Patreon. We believe 
people who make things should get 
paid for the value they give to the world.`}
        </Text>
      </Box>
      <Box backgroundColor={colors.secondary} paddingX={9} flex={1}>
        {imgList.map((x) => (
          <Box key={`landing-${x.id}`}>
            {renderImg(x)}
          </Box>
        ))}
      </Box>
    </TouchableWithoutFeedback >
  )
};

export default LandingScreen;