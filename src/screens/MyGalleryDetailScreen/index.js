import { Text, Image, ScrollView } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import galleryActions from '../../store/gallery/actions';

function MyGalleryDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { galleryId } = params;
  const dispatch = useDispatch();
  const { getGalDetailLoading, galleryDetail } = useSelector(state => state.galleryReducer || initialState);
  const [target, setTarget] = useState([]);

  useEffect(() => {
    dispatch(galleryActions.getGalleryDetail({galleryId}));
  }, [])

  useEffect(() => {
    if (galleryDetail.length === 0) return;
    setTarget(galleryDetail);
  }, [galleryDetail])

  return (
    <>
      <Text>{target.desc}</Text>
      <Text>{target.length} Works</Text>
      {galleryDetail.map((x) => {
        <View style={{ width: '50%', paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }} key={`gallery-myList-${x.id}`}>
        <Image style={{ borderWidth: 3, borderRadius: 10 }} source={{ uri: x.imageLink }} alt="my-gallery-image" height={170} />
        <Text fontFamily="Roboto_400Regular" fontSize={18}>{x.name}</Text>
        <Text>{x.updatedAt}</Text>
      </View>
      })}
    </>
  )
}

export default MyGalleryDetailScreen;