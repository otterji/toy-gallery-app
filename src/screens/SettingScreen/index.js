import { Box, Text, Button, ScrollView, Pressable, HStack, Center, Stack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import Loading from '../../components/Loading';
import AccordionComponent from '../../components/Accordion';
import authActions from '../../store/auth/actions';
import { initialState } from '../../store/auth/reducer';
import colors from '../../styles/colors';



const screen = Dimensions.get('window');


function SettingScreen({ navigation, route }) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authActions.logOut());
  };

  return (
    <Box paddingX="20px" mt={20}>
      <Button size="lg" variant="subtle" colorScheme='orange' mb={10}>
        ABOUT EARTH
      </Button>
      <Button size="lg" variant="subtle" colorScheme='orange' onPress={() => logOut()} >
        SIGNOUT
      </Button>
    </Box>
  )
};

export default SettingScreen;