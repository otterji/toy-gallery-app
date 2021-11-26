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

  useEffect(() => {
    dispatch(pieceActions.getAllArtists())
  }, [])

  useEffect(() => {
    if (artistList.length === 0) return;
    setCurData(artistList);
  }, [artistList])

  const data = [
    { value: 'Aillie-Mai Allen', key: 'lCUTs2' },
    { value: 'Bmmanuel Goldstein', key: 'TXdL0c' },
    { value: 'Cinston Smith', key: 'zqsiEw' },
    { value: 'Dilliam Blazkowicz', key: 'psg2PM' },
    { value: 'Dordon Comstock', key: '1K6I18' },
    { value: 'Ehilip Ravelston', key: 'NVHSkA' },
    { value: 'Fosemary Waterlow', key: 'SaHqyG' },
    { value: 'Gulia Comstock', key: 'iaT1Ex' },
    { value: 'Hihai Maldonado', key: 'OvMd5e' },
    { value: 'Zurtaza Molina', key: '25zqAO' },
    { value: 'Zeter Petigrew', key: '8cWuu3' },
  ];


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
            <View style={{ padding: 20 }}>
              <Flex direction="row" justifyContent="space-between">
                <Text style={{ fontSize: 17, color: colors.secondary }}>{item.value}</Text>
                <Pressable onPress={() => { console.log('hi') }}>
                  <Image
                    key={`atelier-gridView-${item.key}`}
                    source={emptyHeart}
                    alt={`atelier-image-grid-${item.id}`}
                  />
                </Pressable>
              </Flex>
            </View>
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