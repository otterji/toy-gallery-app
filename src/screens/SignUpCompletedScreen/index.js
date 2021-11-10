import { Box, Button, Center, Input, Text, Pressable } from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultBtn from '../../components/DefaultBtn';
import { navigate } from '../../navigation/route';


function SignupCompletedScreen({ navigation }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="20px" bold marginY='25px'>회원가입이 완료되었습니다.</Text>
        <DefaultBtn text="확인" onPressBtn={() => navigate("Main", { screen: "Landing" })} disabled={false}></DefaultBtn>
      </Box >
    </Box >
  )
}

export default SignupCompletedScreen;