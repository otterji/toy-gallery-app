import { Box, Text, Image, ScrollView, SimpleGrid, HStack, Center, Stack, Avatar, Pressable, useToast } from 'native-base';
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

const infoList = [
  {
    id: 0,
    num: 3,
    title: 'gallery',
  },
  {
    id: 1,
    num: 422,
    title: 'follower',
  },
  {
    id: 2,
    num: 159,
    title: 'follow',
  },
];


function ArtistDetailScreen({ navigation, route }) {
  const toast = useToast();
  const { navigate } = navigation;
  const { params } = route;
  const { artistId, artistName, artistInfo } = params;
  const dispatch = useDispatch();
  const { artistDetailLoading, artistDetail, hasAdded, postFavArtistLoading, deleteArtistLoading } = useSelector(state => state.pieceReducer || initialState);
  const [artistWorks, setArtistWorks] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   return () => {
  //     dispatch(pieceActions.resetStore());
  //   };
  // }, []);

  useEffect(() => {
    dispatch(pieceActions.getArtistDetail({ artistId }));
  }, [])

  useEffect(() => {
    if (!artistDetail.id) return;
    setArtistWorks(artistDetail.pieceList);
    setLoading(false)
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
                <Text key={`artist-material-${x.idx}`}>{x.material}  </Text>
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
        <Box width="100%" >
          <SimpleGrid minChildWidth="50%" spacing={0} width="100%" >
            {artistWorks.map((x, index) => {
              return <Pressable key={`artist-works-${x.id}`} onPress={() => {
                navigate('PieceDetail', {
                  pieceTitle: x.title,
                  pieceId: x.id,
                });
              }} >
                <Image
                  key={x.imageLink}
                  width="90%"
                  height={180}
                  key={`artist-gridView-${x.id}`}
                  source={x.imageLink.length !== 0 ? { uri: x.imageLink } : null}
                  alt={`atelier-image-grid-${x.id}`}
                />
                <Text pt={1} pb={2} pl={2} color={colors.gray[1]} width="90%">
                  No.{x.year} {x.material}
                </Text>
              </Pressable>
            })}
          </SimpleGrid>
        </Box >
      )
    }
  ];

  const InfoBox = (_infoList) => {
    return (
      <Pressable
        onPress={() => toast.show({
          title: "Sorry :(",
          status: "warning",
          description: "This is not available in Betaflight",
          placement: "top"
        })}>
        <Stack alignItems="center" >
          <HStack space={20} width="100%" height="74px" alignItems="center">
            {
              _infoList.map((x) => {
                return (
                  <Center key={`artist-info-${x.id}`}>
                    <Text color="#02BA71" fontSize="18px" fontFamily="Belleza_400Regular">{x.num}</Text>
                    <Text fontSize="14px">{x.title}</Text>
                  </Center>
                )
              })
            }
          </HStack>
        </Stack>
      </Pressable>
    )
  };


  const onClickFavAddBtn = () => {
    dispatch(pieceActions.postArtistFavorite({ artistId: artistId }));
    setClicked(true);
  };

  const onClickFavDelBtn = () => {
    dispatch(pieceActions.deleteArtistFavorite({ artistId: artistId }));
    setClicked(false);
  };




  return (
    <>
      {
        loading || artistDetailLoading
          ?
          (
            <Box height={screen.height} alignItems="center" >
              <Loading />
            </Box>
          )
          :
          (
          <ScrollView>
            <Box width="100%" paddingX="15px" paddingY="20px">
              <HStack width="100%" height="74px" style={{ backgroundColor: "#D5C9A5" }}>
                <Box padding="15px">
                  <Avatar
                    source={{
                      uri: artistInfo.profileImageLink
                    }}
                  />
                </Box>
                <Box padding="15px">
                  <Text fontSize="20px" color={colors.textPrimary} fontFamily="Belleza_400Regular">{artistInfo.name}</Text>
                  <Text fontSize="12px" color="#757575">{artistInfo.nationality}</Text>
                </Box>
              </HStack>
              
              <Center style={{ backgroundColor: "#EFEDD5" }} >
                {InfoBox(infoList)}
              </Center>
              <Box height="15px" />
              {
                clicked || hasAdded
                  ?
                  <DefaultBtn text={deleteArtistLoading ? "Loading..." : "Delete Favorites"} onPressBtn={() => onClickFavDelBtn()} disabled={deleteArtistLoading} />
                  :
                  <DefaultBtn text={postFavArtistLoading ? "Loading..." : "Add Favorites"} onPressBtn={() => onClickFavAddBtn()} disabled={postFavArtistLoading} />
              }
                <Box height="15px" />
                <AccordionComponent list={aboutList} />
            </Box>
          </ScrollView >
          )
      }
    </>
  )
};

export default ArtistDetailScreen;