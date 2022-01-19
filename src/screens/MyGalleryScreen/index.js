import { Text, Image, ScrollView, Flex } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AddExhibitionModal from '../../components/AddExhibitionModal';
import Loading from '../../components/Loading';
import galleryActions from '../../store/gallery/actions';
import { useFocusEffect } from '@react-navigation/native';


function MyGalleryScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const dispatch = useDispatch();
  const { getGalGroupLoading, myGalleryList } = useSelector(state => state.galleryReducer);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [galleryList, setGalleryList] = useState([]);


  const onViewLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setWrapperWidth(width);
  }


  useFocusEffect(
    useCallback(() => {
      dispatch(galleryActions.getMyGalleryList());
    }, [])
  );

  useEffect(() => {
    if (myGalleryList.length === 0) return;
    setGalleryList(myGalleryList);
  }, [myGalleryList])

  const renderDate = (_value) => {
    const _date = new Date(_value);
    return _date.toDateString()
  };



  return (
    <>
      {
        getGalGroupLoading
          ?
          (
            <ScrollView>
              <View onLayout={onViewLayout} style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <AddExhibitionModal wrapperWidth={wrapperWidth} from="MyPage" />
                <Loading />
              </View>
            </ScrollView>
          )
          :
          (
            <ScrollView>
              <View onLayout={onViewLayout} style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <AddExhibitionModal wrapperWidth={wrapperWidth} from="MyPage" />
                {
                  galleryList.map((x) => (
                    <Pressable style={{ width: '50%', paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }} key={`gallery-myList-${x.id}`} onPress={() => navigate('MyGalleryDetail', { gallery: x })}>
                      <Image key={x.imageLink} style={{ borderWidth: 3, borderRadius: 10 }} source={{ uri: x.imageLink || 'https://sumisa-canvas-daechi.s3.ap-northeast-2.amazonaws.com/earth/noImagesYet.png' }} alt="my-gallery-image" height={170} />
                      <Text fontFamily="Roboto_400Regular" fontSize={18} color="#6B4B37" px={1}>{x.name}</Text>
                      <Flex direction="row" justifyContent="space-between" px={1}>
                        <Text fontFamily="Roboto_400Regular" color="#97806C" mr={3}>Works</Text>
                        <Text fontFamily="Roboto_400Regular" color="#6B4B37" fontSize={10} mt={1}>{renderDate(x.updatedAt)}</Text>
                      </Flex>
                    </Pressable>
                  ))
                }
              </View>
            </ScrollView>
          )
      }
    </>
  )
}

export default MyGalleryScreen;