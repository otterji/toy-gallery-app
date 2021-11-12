import { Box, Button, Center, Input, Text, Pressable, Image, Flex, ScrollView, VStack, Fab, Icon, SimpleGrid } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TextPropTypes, View } from 'react-native';
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


function PieceDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { pieceId } = params;
  const dispatch = useDispatch();
  const { loading, pieceList, pieceDetail } = useSelector(state => state.pieceReducer || initialState);
  const [targetPiece, setTargetPiece] = useState({
    id: null,
    material: '',
    imageLink: '',
    pressed: true,
  });

  useEffect(() => {
    dispatch(pieceActions.getPieceDeatil({ pieceId }));
  }, []);

  console.log(pieceDetail);

  // useEffect(() => {
  //   if (pieceList.length === 0) return;
  //   setCurPieceList(pieceList);
  // }, [pieceList]);

  return (
    <ScrollView>
      <Image source={{ uri: pieceDetail.imageLink }} width={screen.width} height="300px"></Image>
      <Box width="100%" height="100%" paddingX="15px" paddingTop="10px">
        <Text fontSize="24px">No.{pieceDetail.id} {pieceDetail.material}</Text>
        <Text fontSize="26px" fontWeight="bold">{pieceDetail.title}</Text>
        <Box width="100%" height="35px" backgroundColor="#E7DFC2" paddingLeft="5px" marginTop="20px" borderRadius="5px">
          <Text fontSize="23px">Description</Text>
        </Box>
        <Box>
          <Text>{pieceDetail.desc}</Text>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default PieceDetailScreen;