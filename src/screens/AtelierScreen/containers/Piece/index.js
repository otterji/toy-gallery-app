import { Box, Button, Center, Input, Text, Pressable, Image, Flex, ScrollView, VStack, Fab, Icon, SimpleGrid } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TextPropTypes, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borderWidth } from 'styled-system';
import pieceActions from '../../../../store/piece/actions';
import { initialState } from '../../../../store/piece/reducer';
import { AntDesign } from "@expo/vector-icons"
import colors from '../../../../styles/colors';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Loading from '../../../../components/Loading';
import { navigate } from '../../../../navigation/route';


const screen = Dimensions.get('window');


const Piece = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, pieceList, pieceDetail, pieceLoading } = useSelector(state => state.pieceReducer || initialState);
  const [isDefaultView, setIsDefaultView] = useState(true);
  const [curPiceList, setCurPieceList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    return () => {
      dispatch(pieceActions.resetStore());
    };
  }, []);

  useEffect(() => {
    dispatch(pieceActions.getAllPieces());
  }, []);

  useEffect(() => {
    if (pieceList.length === 0) return;
    setCurPieceList(pieceList);
  }, [pieceList]);

  useEffect(() => { }, [curPiceList])


  const DefaultView = () => (
    <Box width="100%" height="100%" >
      <ScrollView width="100%" style={{ flex: 1 }}>
        <Flex direction="column" >
          <VStack alignItems="center"  >
            {
              curPiceList.map((x) => {
                if (x.id === selectedId) {
                  return (
                    <Pressable key={`atelier-defaultMode-${x.id}`} onPress={() => setSelectedId(x.id)}>
                      <AutoHeightImage
                        alt={`atelier-image-${x.id}`}
                        source={x.imageLink.length !== 0 ? { uri: x.imageLink } : null}
                        width={screen.width}
                      >
                        <Box style={{ width: '100%', height: '100%', backgroundColor: 'rgba(203, 195, 166, 0.7)' }}>
                          <Box pt='15px' pl='15px' style={{ width: '100%', height: '100%' }}>
                            <Text color="#FAFAFA" fontSize="24px" fontFamily="Belleza_400Regular">No. {x.id} {x.material}</Text>
                            <Text color="#FAFAFA" fontSize="26px" fontFamily="Belleza_400Regular">{x.title}</Text>
                            <Button
                              backgroundColor={colors.primary}
                              width="100px"
                              position="absolute"
                              bottom="0"
                              right="0"
                              mr="15px"
                              mb="16px"
                              onPress={() => {
                                navigate('PieceDetail', {
                                  pieceTitle: x.title,
                                  pieceId: x.id,
                                });
                              }}
                              _text={{ fontSize: 16, fontFamily: "Belleza_400Regular" }}
                            >
                              See More
                            </Button>
                          </Box>
                        </Box>
                      </AutoHeightImage>
                      <Box height="15px" />
                    </Pressable>
                  )
                }
                return (
                  <Pressable key={`atelier-defaultMode-${x.title}`} onPress={() => setSelectedId(x.id)}>
                    <AutoHeightImage
                      alt={`atelier-image-not-pressed-${x.id}`}
                      source={x.imageLink.length !== 0 ? { uri: x.imageLink } : null}
                      width={screen.width}
                    />
                    <Box height="15px" />
                  </Pressable>
                )
              })
            }
          </VStack>
        </Flex>
      </ScrollView>
      <Fab
        onPress={() => { setIsDefaultView(false) }}
        position="absolute"
        size="sm"
        backgroundColor={colors.secondary}
        icon={<Icon color="white" as={<AntDesign name="appstore-o" />} size="sm" />}
        renderInPortal={false}
      />
    </Box >
  );

  const GridView = () => (
    <Box width="100%" height="100%" >
      <ScrollView width="100%" style={{ flex: 1 }}>

        <SimpleGrid columns={2} width={screen.width}>
          {
            curPiceList.map((_item) => {
              return (
                <Pressable key={`atelier-gridView-${_item.id}`} onPress={() => {
                  navigate('PieceDetail', {
                    pieceTitle: _item.title,
                    pieceId: _item.id,
                  })
                }} >
                  <Image width={screen.width / 2} height={200} source={_item.imageLink.length !== 0 ? { uri: _item.imageLink } : null} alt={`atelier-image-grid-${_item.id}`} key={`atelier-img-${_item.id}`}
                  />
                  <Text pt={1} pb={2} pl={2} color={colors.gray[1]}>
                    No.{_item.id} {_item.material}
                  </Text>
                </Pressable>
              )
            })
          }
        </SimpleGrid>
      </ScrollView>

      <Fab
        onPress={() => { setIsDefaultView(true) }}
        position="absolute"
        size="sm"
        backgroundColor={colors.secondary}
        icon={<Icon color="white" as={<FontAwesome name="minus-square-o" />} size="sm" paddingLeft="2px" />}
        renderInPortal={false}
      />
      {/* icon grid 도 있음 https://icons.expo.fyi/ */}
    </Box >
  );

  return (
    pieceLoading
      ?
      (<Loading />)
      :
      isDefaultView
        ?
        DefaultView()
        :
        GridView()
  )
}

export default Piece;