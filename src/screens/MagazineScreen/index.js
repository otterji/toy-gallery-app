
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, Center, ScrollView, Flex, VStack, Image, Pressable } from 'native-base';
import magazineActions from '../../store/magazine/actions';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');


export default function MagazineScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { allLoading, magazineList } = useSelector(state => state.magazineReducer || initialState);
  const [curList, setCurList] = useState([]);

  useEffect(() => {
    return () => {
      dispatch(magazineActions.resetStore());
    };
  }, []);

  useEffect(() => {
    dispatch(magazineActions.getAllMagazines());
  }, [])

  useEffect(() => {
    if (magazineList.length === 0) return;
    setCurList(magazineList);
  }, [magazineList])

  return (
    <NativeBaseProvider>
      <Box width="100%" height="100%" >
        <ScrollView width="100%" style={{ flex: 1 }}>
          <Flex direction="column" >
            {
              curList.map((x, idx) => {
                const _date = new Date(x.createdAt);
                return (
                  <Pressable mb="25px" onPress={() => navigate('MagazineDetail', { magazineId: x.id })} key={`magazine-${idx}`}>
                    {x.coverImage && <Image alt={`magazine-${x.coverImage}`} source={{ uri: x.coverImage }} width={screen.width} height="300px" />}
                    <Box key={`magazine-${idx}`} paddingX="20px" >
                      <Text fontSize="12px" color={colors.secondary} mt="5px">{x.authorName}</Text>
                      <Text fontSize="20px" color={colors.secondary} fontWeight="bold">{x.title}</Text>
                      <Flex flex={1} flexDirection="row" justifyContent="space-between">
                        <Text fontSize="12px" color="#97806C" underline>{x.tag}</Text>
                        <Text fontSize="12px" color="#97806C">{_date.toDateString()}</Text>
                      </Flex>
                    </Box>
                  </Pressable>
                )
              })
            }
          </Flex>
        </ScrollView>
      </Box >
    </NativeBaseProvider>
  );
}
