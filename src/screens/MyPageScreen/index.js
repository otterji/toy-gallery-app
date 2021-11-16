import { Box, Text, Image, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';



const screen = Dimensions.get('window');


function MyPageScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const dispatch = useDispatch();
  // const { loading } = useSelector(state => state.pieceReducer || initialState);

  useEffect(() => {
    // dispatch(pieceActions.getPieceDeatil({ pieceId }));
  }, []);


  const aboutList = [
    {
      id: 0,
      title: "About",
      content: "About",
    },
  ]


  return (
    loading
      ?
      (
        <Loading />
      )
      :
      (
        <ScrollView>
          <Box width="100%" paddingX="15px" paddingY="10px">
            <Text fontSize="14px">My Page </Text>
            <AccordionComponent list={aboutList} />
          </Box>
        </ScrollView >
      )
  )
}

export default MyPageScreen;