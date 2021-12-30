import { Box, Text, useToast, ScrollView, Pressable, HStack, Center, Stack, Image, Flex } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';
import authActions from '../../store/auth/actions';
import { initialState } from '../../store/auth/reducer';
import colors from '../../styles/colors';



const screen = Dimensions.get('window');


function MyPageScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.authReducer || initialState);
  const [curUser, setCurUser] = useState({
    id: null,
    email: '',
    nickname: ''
  });
  const toast = useToast();

  useEffect(() => {
    dispatch(authActions.getMe());
  }, []);

  useEffect(() => {
    if (!user.id) return;
    setCurUser(user);
  }, [user])


  const aboutList = [
    {
      id: 0,
      title: "My Badge",
      content: (
        <Pressable onPress={() => toast.show({
          title: "Sorry :(",
          status: "warning",
          description: "This is not available in Betaflight",
          placement: "top"
        })} >
          <Flex direction='row'>
            <Image source={{ uri: "https://sumisa-canvas-daechi.s3.ap-northeast-2.amazonaws.com/earth/medal+(1).png" }} alt="mypage-badge" width="100px" height="100px" />
            <Image source={{ uri: "https://sumisa-canvas-daechi.s3.ap-northeast-2.amazonaws.com/earth/medal.png" }} alt="mypage-badge" width="100px" height="100px" />
          </Flex>
        </Pressable >
      )
    }
  ];

  const infoList = [
    {
      id: 0,
      num: 3,
      title: '갤러리',
    },
    {
      id: 1,
      num: 422,
      title: '팔로워',
    },
    {
      id: 2,
      num: 159,
      title: '팔로우',
    },
  ];

  const InfoBox = (_infoList) => {
    return (
      <Stack alignItems="center" >
        <HStack space={20} width="100%" height="74px" alignItems="center">
          {
            _infoList.map((x) => {
              return (
                <Center key={`infobox-${x.id}`}>
                  <Text color="#02BA71" fontSize="18px" fontWeight="bold">{x.num}</Text>
                  <Text fontSize="14px">{x.title}</Text>
                </Center>
              )
            })
          }
        </HStack>
      </Stack>
    )
  };


  return (
    <ScrollView>
      <Box width="100%" paddingX="15px" paddingY="20px">
        <Box width="100%" height="74px" style={{ backgroundColor: "#E7DFC2" }}>
          <Box padding="15px">
            <Text fontWeight="bold" fontSize="20px" color={colors.textPrimary}>{curUser.nickname}</Text>
            <Text fontSize="12px" color="#757575">{curUser.email}</Text>
          </Box>
        </Box>
        <Box height="15px" />
        <AccordionComponent list={aboutList} />

      </Box>
    </ScrollView >
  )
};

export default MyPageScreen;