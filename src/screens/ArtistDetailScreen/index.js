import { Box, Text, Image, ScrollView, Pressable, HStack, Center, Stack, Avatar } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';
import authActions from '../../store/auth/actions';
import { initialState } from '../../store/auth/reducer';
import colors from '../../styles/colors';
import DefaultBtn from '../../components/DefaultBtn';



const screen = Dimensions.get('window');


function ArtistDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { artistId, artistName, artistInfo } = params;
  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.authReducer || initialState);
  const [curUser, setCurUser] = useState({
    id: null,
    email: '',
    nickname: ''
  });

  // useEffect(() => {
  //   dispatch(authActions.getMe());
  // }, []);

  // useEffect(() => {
  //   if (!user.id) return;
  //   setCurUser(user);
  // }, [user])


  const aboutList = [
    {
      id: 0,
      title: "About",
      content: "About",
    },
    {
      id: 1,
      title: "MATERIAL FUNDING",
      content: "어쩌고 저쩌고"
    },
    {
      id: 2,
      title: "WORKS",
      content: "하하.."
    },
    {
      id: 3,
      title: "NOTES",
      content: "???"
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
        <HStack width="100%" height="74px" style={{ backgroundColor: "#E7DFC2" }}>
          <Box padding="15px">
            <Avatar
              source={{
                uri: artistInfo.profileImageLink
              }}
            />
          </Box>
          <Box padding="15px">
            <Text fontWeight="bold" fontSize="20px" color={colors.textPrimary}>{artistInfo.name}</Text>
            <Text fontSize="12px" color="#757575">{artistInfo.nationality}</Text>
          </Box>
        </HStack>
        <Center style={{ backgroundColor: "#EFEDD5" }} >
          {InfoBox(infoList)}
        </Center>
        <Box height="15px" />
        <DefaultBtn text="Add Favorites" onPressBtn={() => { console.log("hi") }} disabled={false} />
        <Box height="15px" />
        <AccordionComponent list={aboutList} />
      </Box>
    </ScrollView >
  )
};

export default ArtistDetailScreen;