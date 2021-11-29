import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';
import colors from '../../styles/colors';


function MyGalleryScreen({ navigation, route }) {
  const { navigate } = navigation;
  const { params } = route;
  const dispatch = useDispatch();
  // const { user, registerLoading } = useSelector(state => state.authReducer);

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="14px" marginTop="25px" >MyGallery</Text>
      </Box >
    </Box>
  )
}

export default MyGalleryScreen;