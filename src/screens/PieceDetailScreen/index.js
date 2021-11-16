import { Box, Text, Image, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TextPropTypes, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borderWidth } from 'styled-system';
import DefaultBtn from '../../components/DefaultBtn';
import pieceActions from '../../store/piece/actions';
import { initialState } from '../../store/piece/reducer';
import { AntDesign } from "@expo/vector-icons"
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';



const screen = Dimensions.get('window');


function PieceDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { pieceId } = params;
  const dispatch = useDispatch();
  const { loading, pieceDetail } = useSelector(state => state.pieceReducer || initialState);
  const [targetPiece, setTargetPiece] = useState({
    id: null,
    artistId: null,
    imageLink: null,
    detailImgLink: null,
    material: "",
    title: "",
    subTitle: "",
    desc: "",
    features: "",
    artistInfo: {
      id: null,
      profileImageLink: null,
      name: "",
      nationality: ""
    }
  });

  useEffect(() => {
    return () => {
      dispatch(pieceActions.resetStore());
    };
  }, []);

  useEffect(() => {
    dispatch(pieceActions.getPieceDeatil({ pieceId }));
  }, []);

  useEffect(() => {
    if (pieceDetail.id === null) return;
    setTargetPiece(pieceDetail);
  }, [pieceDetail]);

  useEffect(() => { }, [targetPiece])

  const accList = [
    {
      id: 0,
      title: "Description",
      content: targetPiece.desc,
    },
    {
      id: 1,
      title: "Features",
      content: targetPiece.features
    },
    {
      id: 2,
      title: "Artist",
      content: `${targetPiece.artistInfo.name} ${targetPiece.artistInfo.nationality}`
    }
  ]


  return (
    loading
      ?
      (
        <Loading />
      )
      :
      (
        <ScrollView>
          {targetPiece.imageLink && <Image alt={`piece-detail-image-alt-${targetPiece.imageLink}`} source={{ uri: targetPiece.imageLink }} width={screen.width} height="300px" />}
          <Box width="100%" paddingX="15px" paddingY="10px">
            <Text fontSize="14px">No.{targetPiece.id} {targetPiece.material} </Text>
            <Text fontSize="20px" fontWeight="bold" pb="20px">{targetPiece.title} ></Text>
            <AccordionComponent list={accList} />
            <Box height="20px" />
            <DefaultBtn text="갤러리에 추가하기" onPressBtn={() => console.log('hi')} disabled={false} />
            <Box height="8px" />
            <DefaultBtn text="재료 펀딩 참여하기" onPressBtn={() => console.log('hi')} disabled={true} />
          </Box>
        </ScrollView >
      )
  )
}

export default PieceDetailScreen;