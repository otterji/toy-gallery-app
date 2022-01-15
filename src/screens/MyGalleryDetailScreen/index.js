import { Text, Image, ScrollView, Box, Pressable, Flex, Center } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import galleryActions from '../../store/gallery/actions';

function MyGalleryDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { gallery } = params;
  const { id, desc, updatedAt } =gallery;
  const dispatch = useDispatch();
  const { getGalDetailLoading, galleryDetail } = useSelector(state => state.galleryReducer || initialState);
  const [pieceList, setPieceList] = useState([]);

  useEffect(() => {
    return () => {
      dispatch(galleryActions.resetStore());
    };
  }, []);

  useEffect(() => {
    dispatch(galleryActions.getGalleryDetail({galleryId: id}));
  }, [])

  useEffect(() => {
    if (galleryDetail.length === 0) return;
    setPieceList(galleryDetail);
  }, [galleryDetail])

  const renderDate = (_value) => {
    const _date = new Date(_value);
    return _date.toDateString()
  };

  
  return (
    <>
      {
        getGalDetailLoading
        ?
        (
          <Loading />
        )
        :
        (
          <Box p={3}>
            <Text color="#6B4B37" fontSize={18}>{desc}</Text>
            <Text color="#6B4B37" pt={3}>{renderDate(updatedAt)}</Text>
            <Text color="#6B4B37" pt={3} mt={5} fontSize={20} fontFamily="Roboto_400Regular">{pieceList.length} Works</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {pieceList.map((x) => {
              const piece = x.piece;
              return (
                <Pressable
                  style={{ width: '50%', paddingTop: 10, paddingBottom: 10, paddingRight: 10 }}
                  key={`gallery-myList-detail-${x.id}`}
                  onPress={() => {
                  navigate('AtelierStack',
                  {
                    screen: 'PieceDetail',
                    params: {
                      pieceTitle: piece.title,
                      pieceId: piece.id,
                    }
                  });
                }}>
                  <Image key={piece.imageLink} source={{ uri: piece.imageLink}} alt="my-gallery-detail-image" height={170} />
                  <Text fontFamily="Roboto_400Regular" fontSize={14} color="#6B4B37">{piece.artistInfo.name}</Text>
                  <Text fontSize={16} color="#6B4B37" px={1}>{piece.title}</Text>
                </Pressable>
              )
            })}
            </View>
          </Box>
        )
      }
    </>
  )
}

export default MyGalleryDetailScreen;