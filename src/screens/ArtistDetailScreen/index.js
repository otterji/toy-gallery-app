import { Box, Text, Image, ScrollView, SimpleGrid, HStack, Center, Stack, Avatar, Pressable } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';
import { initialState } from '../../store/piece/reducer';
import colors from '../../styles/colors';
import DefaultBtn from '../../components/DefaultBtn';
import pieceActions from '../../store/piece/actions';

const screen = Dimensions.get('window');

function ArtistDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { artistId, artistName, artistInfo } = params;
  const dispatch = useDispatch();
  const { loading, artistDetail, hasAdded } = useSelector(state => state.pieceReducer || initialState);
  const [artistWorks, setArtistWorks] = useState([]);

  useEffect(() => {
    dispatch(pieceActions.getArtistDetail({ artistId }));
  }, []);

  useEffect(() => {
    if (!artistDetail.id) return;
    setArtistWorks(artistDetail.pieceList);
  }, [artistDetail])

  const aboutList = [
    {
      id: 0,
      title: "About",
      content: artistInfo.desc,
    },
    {
      id: 1,
      title: "MATERIAL FUNDING",
      content: (
        <Text>
          {
            artistWorks.map((x, idx) => (
              <>
                <Text key={`artist-material-${x.id}`}>{x.material}  </Text>
              </>
            ))
          }
        </Text>
      )
    },
    {
      id: 2,
      title: "WORKS",
      content: (
        <Box width="100%" height="100%" >
          <SimpleGrid minChildWidth="50%" spacing={0} width="100%" >
            {artistWorks.map((x, index) => {
              return <Pressable key={`works-${x.id}`} onPress={() => {
                navigate('PieceDetail', {
                  pieceTitle: x.title,
                  pieceId: x.id,
                });
              }} >
                <Image
                  width="100%"
                  height={180}
                  key={`atelier-gridView-${x.id}`}
                  source={x.imageLink.length !== 0 ? { uri: x.imageLink } : null}
                  alt={`atelier-image-grid-${x.id}`}
                />
                <Text pt={1} pb={2} pl={2} color={colors.gray[1]}>
                  No.{x.year} {x.material}
                </Text>
              </Pressable>
            })}
          </SimpleGrid>
        </Box >
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
                <Center key={`info-${x.id}`}>
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
      {
        loading
          ?
          (
            <Box height={screen.height} alignItems="center" >
              <Loading />
            </Box>
          )
          :
          (
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
              <DefaultBtn text="Add Favorites" onPressBtn={() => { console.log("hi") }} disabled={!hasAdded} />
              <Box height="15px" />
              <AccordionComponent list={aboutList} />
            </Box>
          )
      }
    </ScrollView >
  )
};

export default ArtistDetailScreen;