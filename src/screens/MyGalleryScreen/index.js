import { Text, Image, ScrollView } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AddExhibitionModal from '../../components/AddExhibitionModal';
import Loading from '../../components/Loading';
import galleryActions from '../../store/gallery/actions';
import { AntDesign } from "@expo/vector-icons"


function MyGalleryScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const dispatch = useDispatch();
  const { getGalGroupLoading, myGalleryList } = useSelector(state => state.galleryReducer || initialState);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [galleryList, setGalleryList] = useState([]);


  const onViewLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setWrapperWidth(width);
  }

  console.log(getGalGroupLoading);

  useEffect(() => {
    dispatch(galleryActions.getMyGalleryList());
  }, [])

  useEffect(() => {
    if (myGalleryList.length === 0) return;
    setGalleryList(myGalleryList);
    console.log(myGalleryList);
  }, [myGalleryList])

  const renderImg = (_value) => {
    if (_value === null || _value.length === 0) {
      return 'https://sumisa-canvas-daechi.s3.ap-northeast-2.amazonaws.com/earth/noImg.png'
    };
    return _value;
  }

  // const renderDate = (_date) => {
  //   const date = new Date(_date);
  //   return date.toDateString();
  // }

  return (
    <>
    {/* {
      getGalGroupLoading
      ?
      (
        <Loading />
      )
        :
      ( */}
        <ScrollView>
        <View onLayout={onViewLayout} style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <AddExhibitionModal wrapperWidth={wrapperWidth} from="MyPage"></AddExhibitionModal>
          {
            galleryList.map((x) => (
              <Pressable style={{ width: '50%', paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }} key={`gallery-myList-${x.id}`} onPress={() => navigate('myGalleryDetail', {galleryId: x.id})}>
                <Image style={{ borderWidth: 3, borderRadius: 10 }} source={{ uri: renderImg(x.imageLink) }} alt="my-gallery-image" height={170} />
                <Text fontFamily="Roboto_400Regular" fontSize={18}>{x.name}</Text>
                <Text>{x.updatedAt}</Text>
              </Pressable>
            ))
          }
        </View>
      </ScrollView>
      {/* )
    } */}
    </>
  )
}

export default MyGalleryScreen;