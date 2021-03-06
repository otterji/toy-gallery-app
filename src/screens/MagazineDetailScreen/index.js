
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, ScrollView, Flex } from 'native-base';
import magazineActions from '../../store/magazine/actions';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native';
import Markdown from 'react-native-markdown-package';
import Loading from '../../components/Loading';

const screen = Dimensions.get('window');

const markdownStyles = {
  heading1: {
    fontSize: 25,
    fontFamily: "Belleza_400Regular",
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Belleza_400Regular",

  },
  heading3: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: "Belleza_400Regular",

  },
  text: {
    color: colors.secondary,
    lineHeight: 23,
    fontFamily: "Belleza_400Regular",

  },
  image: {
    width: screen.width,
    height: 300,
  }
}



export default function MagazineDetailScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const { magazineId } = params;
  const dispatch = useDispatch();

  const { detailLoading, magazineDetail } = useSelector(state => state.magazineReducer || initialState);
  const [target, setTarget] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    dispatch(magazineActions.getMagazineDetail({ magazineId: magazineId }));
  }, []);

  useEffect(() => {
    if (!magazineDetail.id) return;
    setTarget(magazineDetail);
    const _date = new Date(magazineDetail.createdAt);
    setDate(_date.toDateString())
  }, [magazineDetail])


  return (

    detailLoading
      ?
      (
        <Loading />
      )
      :
      (
        <NativeBaseProvider>
          <Box width="100%" height="100%">
            <ScrollView width="100%" style={{ flex: 1 }}>
              <Flex direction="column" paddingX="20px" marginY="25px">
                <Flex direction="row">
                  <Text color={colors.secondary} fontFamily="Belleza_400Regular">{target.authorName} / </Text>
                  <Text color={colors.secondary} fontFamily="Belleza_400Regular">{target.tag}</Text>
                </Flex>
                <Text fontSize="25px" color={colors.secondary} fontFamily="Belleza_400Regular">{target.title}</Text>
                <Text color="#B5A48F" fontFamily="Belleza_400Regular">{date}</Text>
              </Flex>
              <Flex direction="column" marginX="25px">
                <Markdown styles={markdownStyles}>
                  {target.content}
                </Markdown>
              </Flex>
            </ScrollView>
          </Box >
        </NativeBaseProvider >
      )
  );
}
