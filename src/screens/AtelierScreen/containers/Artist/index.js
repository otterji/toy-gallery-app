import { Box, Button, Center, Input, Text, Pressable, Image, Flex, ScrollView, VStack, Fab, Icon, SimpleGrid } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TextPropTypes, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import pieceActions from '../../../../store/piece/actions';
import { initialState } from '../../../../store/piece/reducer';
import colors from '../../../../styles/colors';
import { Dimensions } from 'react-native';
import Loading from '../../../../components/Loading';
import { AlphabetList } from "react-native-section-alphabet-list";
import { navigate } from '../../../../navigation/route';
import emptyHeart from '../../../../../assets/emptyHeart.png';
import filledHeart from '../../../../../assets/filledHeart.png';

const screen = Dimensions.get('window');


const Artist = () => {
  const dispatch = useDispatch();
  const { artistList, artistLoading } = useSelector(state => state.pieceReducer || initialState);
  const [curData, setCurData] = useState([]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(pieceActions.resetStore());
  //   };
  // }, []);

  useEffect(() => {
    dispatch(pieceActions.getAllArtists())
  }, [])

  useEffect(() => {
    if (artistList.length === 0) return;
    setCurData(artistList);
  }, [artistList])


  return (
    artistLoading
      ?
      (<Loading />)
      :
      (
        <AlphabetList
          data={curData}
          indexLetterStyle={{
            color: colors.secondary,
          }}
          renderCustomItem={(item) => (
            <Pressable onPress={() => navigate('ArtistDetail', { artistId: item.id, artistName: item.name, artistInfo: item })}>
              <View style={{ padding: 20 }}>
                <Flex direction="row" justifyContent="space-between">
                  <Text style={{ fontSize: 17, color: colors.secondary }}>{item.value}</Text>
                  {
                    item.artistFavorite.length !== 0
                      ?
                      (
                        <Image
                          key={`${item}`}
                          source={filledHeart}
                          alt={`atelier-image-grid-${item.id}`}
                        />
                      )
                      :
                      (
                        <></>
                      )
                  }
                </Flex>
              </View>
            </Pressable>
          )}
          renderCustomSectionHeader={(section) => (
            <View style={{ backgroundColor: colors.backgroundDark, paddingVertical: 3 }}>
              <Text style={{ paddingLeft: 20, color: colors.secondary }}>{section.title}</Text>
            </View>
          )}
        />
      )
  )
}

export default Artist;