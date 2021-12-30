import { Text, Image, ScrollView } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AddExhibitionModal from '../../components/AddExhibitionModal';
import Loading from '../../components/Loading';
import galleryActions from '../../store/gallery/actions';

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


  useEffect(() => {
    dispatch(galleryActions.getMyGalleryList());
  }, [])

  useEffect(() => {
    if (myGalleryList.length === 0) return;
    setGalleryList(myGalleryList);
  }, [myGalleryList])

  return (
    <>
      <ScrollView>
        <View onLayout={onViewLayout} style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <AddExhibitionModal wrapperWidth={wrapperWidth} from="MyPage"></AddExhibitionModal>
          {
            galleryList.map((x) => (
              <View style={{ width: '50%', paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }} key={`gallery-myList-${x.id}`}>
                <Image style={{ borderWidth: 3, borderRadius: 10 }} source={{ uri: x.imageLink }} alt="my-gallery-image" height={200} />
                <Text>{x.name}</Text>
                <Text>{x.createdAt} {x.updatedAt}</Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default MyGalleryScreen;