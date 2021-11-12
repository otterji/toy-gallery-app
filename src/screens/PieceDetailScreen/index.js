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


function PieceDetailScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { loading, pieceList, pieceDetail } = useSelector(state => state.pieceReducer || initialState);
  const [targetPiece, setTargetPiece] = useState({
    id: null,
    material: '',
    imageLink: '',
    pressed: true,
  });

  useEffect(() => {
    // dispatch(pieceActions.getAllPieces());
  }, []);

  // useEffect(() => {
  //   if (pieceList.length === 0) return;
  //   setCurPieceList(pieceList);
  // }, [pieceList]);

  return (
    <Text>Piece Detail Page</Text>
  )
}

export default PieceDetailScreen;