import { Box, Button, Center, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../store/auth/actions';


function SignupScreen({ navigation }) {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = {
    value: email,
    onChangeText: (text) => setEmail(text)
  }

  const passwordInput = {
    value: password,
    onChangeText: (text) => setPassword(text)
  };

  return (
    <Box width="100%" height="100%">
      <Box paddingX='15px'>
        <Text fontSize="20px" bold marginY='20'>첫 방문이시군요!</Text>
        <Text fontSize="14px" >이메일</Text>
        <Input {...emailInput} mx="3" placeholder="이메일" w={{
          base: "95%",
          md: "25%",
        }}
          backgroundColor="#E7DFC2"
          marginBottom="10"
        ></Input>
        <Text fontSize="14px" >비밀번호</Text>
        <Input {...passwordInput} mx="3" placeholder="비밀번호" w={{
          base: "95%",
          md: "25%",
        }}
          marginBottom="30"
          backgroundColor="#E7DFC2"></Input>
        <Button onPress={() => dispatch(authActions.postRegister({
          email, password
        }))}
          width="100%"
          backgroundColor='#E7E2D4'
          color='#ABA9A1'
          height='48px'
        >작품 관람하기</Button>
      </Box >
    </Box>
  )
}

export default SignupScreen;