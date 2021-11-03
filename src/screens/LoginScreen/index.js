import { Box, Button, Center, Input, Text, Pressable } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { borderWidth } from 'styled-system';
import DefaultBtn from '../../components/DefaultBtn';
import authActions from '../../store/auth/actions';


function LoginScreen({ navigation }) {
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
  // style = {{ borderColor: "black", borderWidth: 1 }}

  return (
    <Box paddingX="15px" width="100%" height="100%">
      <Box>
        <Text fontSize="20px" bold marginY='25px'> 안녕하세요, 어스입니다.</Text>
        <Text fontSize="14px" >이메일*</Text>
        <Input {...emailInput} placeholder="이메일을 입력해주세요"
          backgroundColor="#E7DFC2"
          marginBottom="15px"
        ></Input>
        <Text fontSize="14px" >비밀번호*</Text>
        <Input {...passwordInput} placeholder="비밀번호를 입력해주세요"
          marginBottom="30"
          backgroundColor="#E7DFC2"></Input>
        <DefaultBtn text="회원가입하기" onPressBtn={() => navigate("SignUp")} disabled={false}></DefaultBtn>
        <Box height="15px" />
        <DefaultBtn text="로그인 후 작품 관람하기" onPressBtn={() => () => dispatch(authActions.postRegister({
          email, password
        }))} disabled={email.length === 0 || password.length === 0}></DefaultBtn>
      </Box >
    </Box >
  )
}

export default LoginScreen;