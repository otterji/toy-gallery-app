import { Box, Button, Center, Input, Text, Pressable, Image, Flex, ScrollView, VStack, Fab, Icon, SimpleGrid } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borderWidth } from 'styled-system';
import DefaultBtn from '../../components/DefaultBtn';
import pieceActions from '../../store/piece/actions';
import { initialState } from '../../store/piece/reducer';
import { AntDesign } from "@expo/vector-icons"
import colors from '../../styles/colors';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const screen = Dimensions.get('window');


function AtelierScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { loading, pieceList, pieceDetail } = useSelector(state => state.pieceReducer || initialState);
  const [isDefaultView, setIsDefaultView] = useState(true);

  useEffect(() => {
    dispatch(pieceActions.getAllPieces());
  }, []);

  useEffect(() => { }, [pieceList]);

  const DefaultView = () => (
    <Box width="100%" height="100%" >
      <ScrollView width="100%" style={{ flex: 1 }}>
        <Flex direction="column" >
          <VStack alignItems="center"  >
            {
              pieceList.map((x) => {
                return (
                  <Pressable key={x.id} onPress={() => console.log(x.id)}>
                    <AutoHeightImage
                      alt="image"
                      source={{ uri: x.imageLink }}
                      width={screen.width}
                    />
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
      />
      {/* icon grid 도 있음 https://icons.expo.fyi/ */}
    </Box >
  );

  const GridView = () => (
    <Box width="100%" height="100%" >
      <ScrollView width="100%" style={{ flex: 1 }}>

        <SimpleGrid columns={2} width={screen.width}>
          {
            pieceList.map((_item, index) => {
              return (
                <Box>
                  <Image width={screen.width / 2} height={200} source={{ uri: _item.imageLink }} alt="image" key={_item.id} />
                  <Text pt={1} pb={2} pl={2} color={colors.gray[1]}>
                    No.{_item.id} {_item.material}
                  </Text>
                </Box>
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
      />
      {/* icon grid 도 있음 https://icons.expo.fyi/ */}
    </Box >
  );

  return (
    isDefaultView
      ?
      DefaultView()
      :
      GridView()
  )
}

export default AtelierScreen;