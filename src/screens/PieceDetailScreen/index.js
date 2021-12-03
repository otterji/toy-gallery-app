import { Box, Text, Image, ScrollView, Pressable, Modal, Button, VStack, FormControl, Input } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TextPropTypes, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import pieceActions from '../../store/piece/actions';
import { initialState } from '../../store/piece/reducer';
import { AntDesign } from "@expo/vector-icons"
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';
import colors from '../../styles/colors';
import AddExhibitionModal from '../../components/AddExhibitionModal';


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
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedExhibition, setSelectedExhibition] = useState({
    id: null,
  });

  useEffect(() => {
    return () => {
      dispatch(pieceActions.resetStore());
    };
  }, []);

  useEffect(() => {
    dispatch(pieceActions.getPieceDetail({ pieceId }));
  }, []);

  useEffect(() => {
    if (pieceDetail.id === null) return;
    setTargetPiece(pieceDetail);
  }, [pieceDetail]);

  useEffect(() => { }, [targetPiece]);

  const onPressCreateBtn = ({ name, desc }) => {
    setShowModal2(false);
    dispatch(pieceActions.postExhibition({ name, desc }));
  };


  return (
    loading
      ?
      (
        <Loading />
      )
      :
      (
        <ScrollView keyboardShouldPersistTaps="always">
          {targetPiece.imageLink && <Image alt={`piece-detail-image-alt-${targetPiece.imageLink}`} source={{ uri: targetPiece.imageLink }} width={screen.width} height="300px" />}
          <Box width="100%" paddingX="15px" paddingY="10px">
            <Text fontSize="20px" color={colors.secondary} fontWeight="bold">{targetPiece.title} {targetPiece.year}</Text>
            <Text fontSize="14px" color={colors.secondary} pb="20px">No.{targetPiece.id} {targetPiece.material} </Text>
            <Box height="10px" />
            <Text fontSize="15px" color={colors.secondary} >{targetPiece.desc}</Text>
            <Box height="8px" />
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            <Box height="8px" />
            <Pressable onPress={() => navigate('ArtistDetail', { artistId: targetPiece.artistId, artistName: targetPiece.artistInfo.name, artistInfo: targetPiece.artistInfo })}>
              <Text fontSize="18px" color={colors.secondary} >{targetPiece.artistInfo.name} > </Text>
              <Box height="8px" />
            </Pressable>
            <Text fontSize="15px" color={colors.secondary} >{targetPiece.artistInfo.desc}</Text>
            <Box height="38px" />
            <AddExhibitionModal from="pieceDetail"></AddExhibitionModal>
            <Box height="8px" />
          </Box>
        </ScrollView >
      )
  )
}

export default PieceDetailScreen;