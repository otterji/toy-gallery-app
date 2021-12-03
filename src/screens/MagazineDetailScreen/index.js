
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, Center, ScrollView, Flex, VStack } from 'native-base';
import magazineActions from '../../store/magazine/actions';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';



export default function MagazineDetailScreen({ navigation }) {
  const dispatch = useDispatch();
  const { allLoading, magazineList } = useSelector(state => state.magazineReducer || initialState);
  const [curList, setCurList] = useState([]);

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
              curList.map((x, idx) => (
                <Box key={`magazine-${x.title}`} paddingX="20px" >
                  <Text fontSize="12px" color={colors.secondary}>Madeleine Bialke</Text>
                  <Text fontSize="20px" color={colors.secondary} fontWeight="bold">{x.title}</Text>
                  <Flex flex={1} flexDirection="row" justifyContent="space-between">
                    <Text fontSize="12px" color="#97806C">Artist</Text>
                    <Text fontSize="12px" color="#97806C">2 days ago</Text>
                  </Flex>
                </Box>
              ))
            }
          </Flex>
        </ScrollView>
      </Box >
    </NativeBaseProvider>
  );
}