
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, Center, ScrollView, Flex, VStack, Image, Pressable } from 'native-base';
import magazineActions from '../../store/magazine/actions';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';
import Markdown from 'react-native-simple-markdown'
import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: 'purple',
  },
  link: {
    color: 'pink',
  },
  mailTo: {
    color: 'orange',
  },
  text: {
    color: '#555555',
  },
}

export default function MagazineScreen({ navigation }) {
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

  const copy = `# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;


  return (
    <NativeBaseProvider>
      <Box width="100%" height="100%" >
        <ScrollView width="100%" style={{ flex: 1 }}>
          <Flex direction="column" >
            {
              curList.map((x, idx) => {
                return (
                  <Pressable mb="25px" onPress={() => { console.log('pressed!') }}>
                    {x.coverImage && <Image alt={`magazine-${x.coverImage}`} source={{ uri: x.coverImage }} width={screen.width} height="300px" />}
                    <Box key={`magazine-${idx}`} paddingX="20px" >
                      <Text fontSize="12px" color={colors.secondary} mt="5px">Madeleine Bialke</Text>
                      <Text fontSize="20px" color={colors.secondary} fontWeight="bold">{x.title}</Text>
                      <Flex flex={1} flexDirection="row" justifyContent="space-between">
                        <Text fontSize="12px" color="#97806C" underline>Artist</Text>
                        <Text fontSize="12px" color="#97806C">2 days ago</Text>
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
